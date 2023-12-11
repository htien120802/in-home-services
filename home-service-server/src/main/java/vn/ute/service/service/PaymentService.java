package vn.ute.service.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import vn.ute.service.config.VNPayConfig;
import vn.ute.service.entity.BookingEntity;
import vn.ute.service.entity.CustomerEntity;
import vn.ute.service.entity.PaymentEntity;
import vn.ute.service.enumerate.PaymentStatus;
import vn.ute.service.repository.BookingRepository;
import vn.ute.service.repository.PaymentRepository;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.*;
@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    @Autowired
    private BookingRepository bookingRepository;
    @Value("${payment.url.success}")
    private String urlSuccess;
    @Value("${payment.url.fail}")
    private String urlFail;
    @Value("${payment.url.error}")
    private String urlError;
    public String createPaymentUrl(PaymentEntity payment, HttpServletRequest request) throws UnsupportedEncodingException {
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String orderType = "other";
        long amount = payment.getAmount()*100;
        String bankCode = "NCB";

        String vnp_TxnRef = String.valueOf(payment.getBooking().getId());
        String vnp_IpAddr = VNPayConfig.getIpAddress(request);

        String vnp_TmnCode = VNPayConfig.vnp_TmnCode;

        Map<String, String> vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");

        vnp_Params.put("vnp_BankCode", bankCode);
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);
        vnp_Params.put("vnp_OrderType", orderType);

        vnp_Params.put("vnp_Locale", "vn");
        vnp_Params.put("vnp_ReturnUrl", VNPayConfig.vnp_ReturnUrl+"?paymentId="+payment.getId());
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);

        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());
        vnp_Params.put("vnp_ExpireDate", vnp_ExpireDate);

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = VNPayConfig.hmacSHA512(VNPayConfig.secretKey, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = VNPayConfig.vnp_PayUrl + "?" + queryUrl;

        return paymentUrl;
    }
    @Transactional
    public void paymentCallBack(Map<String, String> queryParams, HttpServletResponse response) throws IOException {
        String vnp_ResponseCode = queryParams.get("vnp_ResponseCode");
        String paymentId = queryParams.get("paymentId");
        if (paymentId != null && !paymentId.equals("")) {
            PaymentEntity payment = paymentRepository.findById(UUID.fromString(paymentId)).orElse(null);
            if ("00".equals(vnp_ResponseCode)) {
                // Giao dịch thành công
                // Thực hiện các xử lý cần thiết, ví dụ: cập nhật CSDL
                if (payment != null){
                    payment.setPaymentStatus(PaymentStatus.PAID);
                    payment.setPaymentDate(new Date(System.currentTimeMillis()));
                    payment.setTransactionNo(Integer.valueOf(queryParams.get("vnp_TransactionNo")));
                    paymentRepository.save(payment);
                    response.sendRedirect(urlSuccess);
                }
                else {
                    response.sendRedirect(urlError);
                }

            } else {
                if (payment != null){
                    paymentRepository.delete(payment);
                    bookingRepository.delete(payment.getBooking());
                    response.sendRedirect(urlFail);
                }
                else {
                    response.sendRedirect(urlError);
                }
            }
        }
    }


    public String doRefund(CustomerEntity customer, BookingEntity booking, HttpServletRequest request) throws IOException {
        String vnp_RequestId = VNPayConfig.getRandomNumber(8);
        String vnp_Version = "2.1.0";
        String vnp_Command = "refund";
        String vnp_TmnCode = VNPayConfig.vnp_TmnCode;
//        02: Giao dịch hoàn trả toàn phần (vnp_TransactionType=02)
//        03: Giao dịch hoàn trả một phần (vnp_TransactionType=03)
        // mac dinh = 2, dell ai tra mot phan cho met

        String vnp_TransactionType = "02" ;//req.getParameter("vnp_TransactionType")
        String vnp_TxnRef = booking.getId().toString();//req.getParameter("order_id");
        // response từ query trả về từ vnpay ko cần *100, nó đã sẵn nhân 100 rồi
        double amount = booking.getTotalPrice() ;//Integer.parseInt(req.getParameter("amount"))*100;//150000 * 100;10000000
        String vnp_Amount = String.valueOf(amount);
        String vnp_OrderInfo = "Hoan tien GD BookingID:" + vnp_TxnRef;
        String vnp_TransactionNo = String.valueOf(booking.getPayment().getTransactionNo());

        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));
        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");

        String vnp_TransactionDate = formatter.format(cld.getTime()) ;//req.getParameter("trans_date"); //
        String vnp_CreateBy = customer.getFirstName() + " " + customer.getLastName();//req.getParameter("user");NGUYEN VAN A// ko quan trong


        String vnp_CreateDate = formatter.format(cld.getTime());

        String vnp_IpAddr = VNPayConfig.getIpAddress(request);

        JSONObject vnp_Params = new JSONObject();

        //63562614
        //20230616094041

        vnp_Params.append("vnp_RequestId", vnp_RequestId);
        vnp_Params.append("vnp_Version", vnp_Version);
        vnp_Params.append("vnp_Command", vnp_Command);
        vnp_Params.append("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.append("vnp_TransactionType", vnp_TransactionType);
        vnp_Params.append("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.append("vnp_Amount", vnp_Amount);
        vnp_Params.append("vnp_OrderInfo", vnp_OrderInfo);

        if(vnp_TransactionNo != null && !vnp_TransactionNo.isEmpty())
        {
            vnp_Params.append("vnp_TransactionNo", vnp_TransactionNo);
        }

        vnp_Params.append("vnp_TransactionDate", vnp_TransactionDate);
        vnp_Params.append("vnp_CreateBy", vnp_CreateBy);
        vnp_Params.append("vnp_CreateDate", vnp_CreateDate);
        vnp_Params.append("vnp_IpAddr", vnp_IpAddr);

        String hash_Data = vnp_RequestId + "|" + vnp_Version + "|" + vnp_Command + "|" + vnp_TmnCode + "|" +
                vnp_TransactionType + "|" + vnp_TxnRef + "|" + vnp_Amount + "|" + vnp_TransactionNo + "|"
                + vnp_TransactionDate + "|" + vnp_CreateBy + "|" + vnp_CreateDate + "|" + vnp_IpAddr + "|" + vnp_OrderInfo;

        String vnp_SecureHash = VNPayConfig.hmacSHA512(VNPayConfig.secretKey, hash_Data.toString());

        vnp_Params.append("vnp_SecureHash", vnp_SecureHash);

        System.out.println(vnp_Params);

        URL url = new URL (VNPayConfig.vnp_ApiUrl);
        HttpURLConnection con = (HttpURLConnection)url.openConnection();
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(vnp_Params.toString());
        wr.flush();
        wr.close();
        int responseCode = con.getResponseCode();
        System.out.println("nSending 'POST' request to URL : " + url);
        System.out.println("Post Data : " + vnp_Params);
        System.out.println("Response Code : " + responseCode);
        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String output;
        StringBuffer response = new StringBuffer();
        while ((output = in.readLine()) != null) {
            response.append(output);
        }
        in.close();
        System.out.println(response.toString());

        return response.toString();
    }
}
