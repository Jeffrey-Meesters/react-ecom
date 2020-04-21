import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_Jm1P1lVhQQIqIt7G5yuPgJQX";
  const onToken = token => {
    console.log(token);
    console.log("Payment successful");
  };
  return (
    <StripeCheckout
      currency="EUR"
      label="Pay Now"
      name="ECOM"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
