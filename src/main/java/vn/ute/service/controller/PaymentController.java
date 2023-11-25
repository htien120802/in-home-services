package vn.ute.service.controller;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import vn.ute.service.service.PaymentService;

import java.io.IOException;
import java.util.Map;

@RestController
public class PaymentController {
    @Autowired
    private PaymentService paymentService;
    @GetMapping("/payment-callback")
    public void paymentCallback(@RequestParam Map<String, String> queryParams, HttpServletResponse response) throws IOException, IOException {
        paymentService.paymentCallBack(queryParams, response);
    }
}
