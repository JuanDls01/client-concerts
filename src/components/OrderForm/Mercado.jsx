import { useMercadopago } from "react-sdk-mercadopago";
import { useEffect } from "react";
import { Divider } from "rsuite";

const Mercado = ({ preference }) => {
  const mercadopago = useMercadopago.v2(
    "TEST-cefc5873-9a5f-4f12-a1fa-d564350b7466",
    {
      locale: "en-US",
    }
  );
  console.log(preference);

  useEffect(() => {
    if (mercadopago && preference) {
      const miMercado = mercadopago.checkout({
        preference: {
          id: preference,
        },
        render: {
          container: "#mercado",
          label: "Pay",
        },
      });
      console.log("render botón");
    }
  }, [mercadopago, preference]);

  return <div id="mercado"></div>;
};

export default Mercado;
