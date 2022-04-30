import React from "react";
import ReactDOM from "react-dom";
import paypal from "paypal-checkout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Paypal = ({ order, userId }) => {
  const navigate = useNavigate();
  const paypalCon = {
    currency: "USD",
    env: "sandbox",
    client: {
      sandbox:
        "AWW2lRf52TBaYihSfySQaOxo8oXiYD9VYTNMAIfre11MKhgy19cEyGO-la-VrQX0gshVomjsFD4FqJZ1",
      production: "--id--",
    },
    style: {
      size: "large",
      shape: "rect",
      color: "gold",
    },
  };
  const PaypalButton = paypal.Button.driver("react", { React, ReactDOM });
  const payment = (data, actions) => {
    const payment = {
      transactions: [
        {
          amount: {
            total: order.total,
            currency: paypalCon.currency,
          },
          description: "",
          custom: order.customer || "",
          item_list: {
            items: order.items,
          },
        },
      ],
      note_to_payer: "Any doubt? Contact us!",
    };
    return actions.payment.create({ payment });
  };
  const onAuthorize = (data, actions) => {
    return actions.payment
      .execute()
      .then((response) => {
        Swal.fire({
          title: "Success!",
          text: "Purchase completed! The clients will recieve an e-mail with their tickets! You can also check your purchases in the 'My Shopping' section.",
          icon: "success",
        });
        navigate(`/user/shoppinghistory/${userId}`);
      })
      .catch((error) => console.log(error));
  };
  const onError = (error) => {
    console.log(error);
    alert("Algo pasó! ", error);
  };
  const onCancel = (data, actions) => {
    console.log("Pago cancelado por el usuario");
    alert("Payment canceled");
  };
  return (
    <PaypalButton
      env={paypalCon.env}
      client={paypalCon.client}
      payment={(data, actions) => payment(data, actions)}
      onAuthorize={(data, actions) => onAuthorize(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(error) => onError(error)}
      style={paypalCon.style}
      commit
      locale="en_US"
    />
  );
};

export default Paypal;
