import { MdOutlineQrCode2 } from "react-icons/md";
import QRCode from "react-qr-code";
// import s from './TicketPDF.module.css';
import {
  PDFViewer,
  Document,
  Page,
  View,
  Text,
  Image,
} from "@react-pdf/renderer";
import logo from "../../../assets/images/logotipo.png";
import logo2 from "../../../assets/images/codigoQr.png";
import fondo from "../../../assets/images/FondoHero.png";

export default function TicketPDF({ props }) {
  const result = props.adress.filter((item) => item.id == props.stage);

  // let qr = (<canvas>
  //     <QRCode  value={
  //                     "Folio: "+props.Folio+", "+
  //                     "Evento: "+ props.Event+", "+
  //                     "Usuario: "+ props.nameT+", "+
  //                     "Fecha: "+ props.date+", "+
  //                     "Zona: "+ props.category
  //                     }
  //                     bgColor="#242565"
  //                     size={80}
  //                     fgColor="#fff"
  //                     level="L"
  //                     />
  // </canvas>)

  //                     const contexto = qr.getContext('2d');
  //                     contexto.beginPath();
  //                     contexto.arc(95, 50, 40, 0, 2 * Math.PI);
  //                     contexto.stroke();

  return (
    <Document
      style={{
        backgroundColor: "#24256580",
      }}
    >
      <Image
        src={fondo}
        style={{
          width: "100%",
          height: "98vh",
          opacity: "0.05",
          position: "absolute",
          top: "0",
        }}
      />
      {/* <Page size="A4"> */}
      {/* Container */}
      <View
        style={{
          width: "100%",
          height: "10vh",
          backgroundColor: "#242565",
          borderBottom: "3px solid #F5167E",
        }}
      >
        <Image
          src={logo}
          style={{
            position: "absolute",
            zIndex: "10",
            width: "260px",
            height: "220px",
            top: "-58px",
            // margin: "7px",
            // padding:"0 8px"
          }}
        />
        <Text
          style={{
            position: "absolute",
            // zIndex: "10",
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            // fontFamily:" bold",
            top: "34px",
            left: "240px",
            // width: "220px",
            // height: "170px",
            // margin: "7px",
            // padding:"0 8px"
            zIndex: "33",
          }}
        >
          Thank you, enjoy your event!!!
        </Text>
      </View>
      <View
        style={{
          width: "99%",
          height: "90vh",
          // transform: 'rotate(90deg)',
          display: "flex",
          // backgroundColor: "grey",
        }}
      >
        {/* <Text>Desde Ticket para Tickets</Text> */}
        {/* Ticket */}
        <View
          style={{
            backgroundColor: "rgba(36, 37, 101, 1)",
            margin: "46% 10px",
            color: "#fff",
            width: "96%",
            // height: "1850px",
            borderRadius: "18px",
            // border: "5px solid #242565",
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* Primera parte Ticket */}
          <View
            style={{
              textAlign: "center",
              borderRight: "4px dashed #fff",
              width: "131.4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Div folio e Imagen */}
            <View
              style={{
                width: "98%",
                textAlign: "center",
                // marginTop: "20%",
              }}
            >
              <Text
                style={{
                  // fontSize: "1.5rem",
                  margin: "20px 5px",
                  // padding: "5px",
                }}
              >
                Folio {props.Folio}
              </Text>

              <Image
                src={logo2}
                style={{
                  width: "100px",
                  height: "150px",
                  margin: "7px",
                  padding: "0 8px",
                }}
              />
            </View>
            {/* Div punteado */}
            <View
              style={{
                width: "3px",
              }}
            >
              {/* Esfera 1 */}
              <View
                style={{
                  width: "32px",
                  height: "32px",
                  // borderBottom: "5px solid #fff",
                  // borderLeft: "5px solid #fff",
                  // borderRight: "5px solid #fff",
                  backgroundColor: "#9191b1",
                  borderRadius: "100%",
                  position: "relative",
                  left: "112px",
                  bottom: "180px",
                }}
              />
              {/* Esfera 2 */}
              <View
                style={{
                  width: "32px",
                  height: "32px",
                  // borderBottom: "5px solid #fff",
                  // borderLeft: "5px solid #fff",
                  // borderRight: "5px solid #fff",
                  backgroundColor: "#9191b1",
                  borderRadius: "100%",
                  position: "relative",
                  left: "112px",
                  top: "10px",
                }}
              />
            </View>
          </View>
          {/* Segunda parte boleto */}
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              width: "240px",
              // flexWrap: "wrap",
              alignItems: "left",
              margin: "8px 0 0 20px",
              // padding: "8px",
              background: 'url("../../../assets/images/logotipo.png")',
              opacity: "1",
            }}
          >
            <Text
              style={{
                color: "#F5167E",
                fontSize: "24px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              {props.Event}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginLeft: "20px",
              }}
            >
              {props.nameT}
            </Text>
            <Text
              style={{
                fontSize: "12px",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              {props.email}
            </Text>
            <Text
              style={{
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Date: {props.date}
            </Text>
            <Text
              style={{
                fontSize: "14px",
                marginBottom: "5px",
              }}
            >
              Stage: {result[0].name}
            </Text>
            <Text
              style={{
                fontSize: "16px",
                marginBottom: "5px",
              }}
            >
              Address: {result[0].address}
            </Text>
          </View>
          {/* Tercera parte del boleto */}
          {/* logo my ticket */}
          <View
            style={{
              float: "left",
              width: "150px",
              // backgroundColor:"red",
              background: 'url("../../../assets/images/logotipo.png")',
              opacity: "1",
              zIndex: "15",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                // flexWrap: "wrap",
                alignItems: "center",
                margin: "10px",
                textAlign: "center",
              }}
            >
              <View
                style={{
                  width: "80%",
                  height: "auto",
                  margin: "8px auto",
                  borderRadius: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={props.img}
                  style={{
                    width: "100%",
                    borderRadius: "100%",
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                Category:
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                {props.category}
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                Price: {props.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* </Page> */}
    </Document>
  );
}
