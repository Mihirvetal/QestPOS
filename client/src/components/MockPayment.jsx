import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MockPayment = () => {
  const { state: customerDetails } = useLocation();
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();

  const handlePayment = () => {
    setTimeout(() => {
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleReturnToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Payment Checkout</h1>
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Customer Details</h2>
          <p>Name: {customerDetails.name}</p>
          <p>Mobile Number: {customerDetails.mobileNumber}</p>
          <p>Age: {customerDetails.age}</p>
          <p>City: {customerDetails.city}</p>
        </div>

        {!paymentSuccess ? (
          <div className="text-center">
            <p className="text-gray-500 mb-4">Processing Payment...</p>
            <button
              onClick={handlePayment}
              className="w-full py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Complete Payment
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h3 className="text-green-600 font-semibold">Payment Successful!</h3>
            <p className="text-gray-500">Thank you, {customerDetails.name}.</p>
            <p>Receipt has been sent to your mobile number: {customerDetails.mobileNumber}</p>
            <button
              onClick={handleReturnToHome}
              className="w-full py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300 mt-4"
            >
              Return to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MockPayment;
