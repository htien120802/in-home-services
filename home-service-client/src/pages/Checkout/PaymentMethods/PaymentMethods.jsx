import React from 'react';

import PropTypes from 'prop-types';

import cashPayment from 'assets/icons/cash-payment.png';
import vnpayPayment from 'assets/icons/Logo_VNPAY.webp';

function PaymentMethods({ selectedMethod, handleSelectMethod }) {
  return (
    <ul className="wsus__booking_payment d-flex flex-wrap">
      <li style={{ height: 'auto', border: selectedMethod === 'cash' ? '2px solid #007bff' : 'none' }}>
        <a href="javascript:;" onClick={() => handleSelectMethod('cash')}>
          <img src={cashPayment} alt="Cash payment img" className="img-fluid w-100" />
        </a>
      </li>

      <li style={{ height: 'auto', border: selectedMethod === 'vnpay' ? '2px solid #007bff' : 'none' }}>
        <a href="javascript:;" onClick={() => handleSelectMethod('vnpay')}>
          <img src={vnpayPayment} alt="VNPay img" className="img-fluid w-100" />
        </a>
      </li>
    </ul>
  );
}

PaymentMethods.propTypes = {
  selectedMethod: PropTypes.string.isRequired,
  handleSelectMethod: PropTypes.func.isRequired,
};

export default PaymentMethods;
