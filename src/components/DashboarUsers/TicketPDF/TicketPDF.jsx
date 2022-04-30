import { MdOutlineQrCode2 } from "react-icons/md";
import QRCode from 'react-qr-code'
import s from './TicketPDF.module.css';
import {PDFViewer, Document, Page, View, Text, Image} from '@react-pdf/renderer';
import logo from "../../../assets/images/logotipo.png";
import logo2 from "../../../assets/images/codigoQr.png";

export default function TicketPDF({props}){

    const result = props.adress.filter(item=>item.id==props.stage)

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
      <Document >
        <Page size="A4">
            {/* Container */}
        <View
          style={{
            width: "94%",
            // transform: 'rotate(90deg)'
          }}
        >
          {/* <Text>Desde Ticket para Tickets</Text> */}
          {/* Ticket */}
          <View
            style={{
              backgroundColor: "rgba(36, 37, 101, 1)",
              margin: "20px 5%",
              color: "#fff",
              width: "100%",
              borderRadius: "18px",
              border: "5px solid #242565",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {/* Primera parte Ticket */}
            <View
              style={{
                textAlign: "center",
                borderRight: "2px dashed #fff",
                width: "30%",
                display: "flex",
              }}>

              {/* Div folio e Imagen */}
              <View
                style={{
                  width: "100%",
                  textAlign: "center",
                  marginTop: "20%",
                }}>
                    <Text
                    style={{
                        // fontSize: "140%",
                        margin: "8% 2%",
                    }}>Folio {props.Folio}</Text>

                    <Image
                    src={logo2}
                    style={{
                        width: "50px",
                        margin: "0 20%",
                    }}/>
              </View>
              {/* Div punteado */}
              <View
                style={{
                  width: "3px",
                }}>
                    {/* Esfera 1 */}
                    <View
                    style={{
                        width: "32px",
                        height: "32px",
                        // borderBottom: "5px solid #fff",
                        // borderLeft: "5px solid #fff",
                        // borderRight: "5px solid #fff",
                        backgroundColor: "#fff",
                        borderRadius: "100%",
                        position: "relative",
                        left: "90px",
                        bottom: "9%",
                    }}/>
                    {/* Esfera 2 */}
                    <View
                    style={{
                        width: "32px",
                        height: "32px",
                        // borderBottom: "5px solid #fff",
                        // borderLeft: "5px solid #fff",
                        // borderRight: "5px solid #fff",
                        background: "#000",
                        borderRadius: "100%",
                        position: "relative",
                        left: "90px",
                        bottom: "9%",
                    }}/>
              </View>
            </View>
            {/* Segunda parte boleto */}
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                width: "60%",
                flexWrap: "wrap",
                alignItems: "left",
                margin: "3%",
                padding: "8px",
                background: 'url("../../../assets/images/logotipo.png")',
                opacity: "1",
              }}>
                    <Text>{props.Event}</Text>
                    <Text>{props.nameT}</Text>
                    <Text>{props.email}</Text>
                    <Text>DATE: {props.date}</Text>
                    <Text>STAGE: {result[0].name}</Text>
                    <Text>ADRESS: {result[0].address}</Text>
            </View>
              {/* Tercera parte del boleto */}
              {/* logo my ticket */}
            <View
              style={{
                float: "right",
                width: "65%",
                background: 'url("../../../assets/images/logotipo.png")',
                opacity: "1",
              }}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  flexWrap: "wrap",
                  alignItems: "left",
                  margin: "30px",
                  textAlign: "center",
                }}>
                <View
                  style={{
                    width: "28%",
                    margin: "2% auto",
                    borderRadius: "100%",
                    overflow: "hidden",
                  }}>
                  <Image
                    src={props.img}
                    style={{
                      width: "100%",
                      borderRadius: "100%",
                    }}/>
                </View>
                <Text>
                  Category:       
                  {props.category}
                </Text>
                <Text>Price: {props.price}</Text>
              </View>
            </View>
          </View>
        </View>
        </Page>
      </Document>
    );
}

// import { MdOutlineQrCode2 } from "react-icons/md";
// import {Document, Page, Text, View, Image} from "@react-pdf/renderer";
// import QRCode from 'react-qr-code'
// import s from './TicketPDF.module.css'

// export default function TicketPDF({props}){
//     console.log(props)
//     return(
//         <Document>
//             <Page size="A4">
//             <View className={s.container}>
//         <View className={s.ticket}>
//             <View className={s.pparte}>
//                <View className={s.interno}>
//                <Text className={s.folio}><strong>No {props.Folio}</strong></Text>
//                 <QRCode  value={
//                     "Folio: "+props.Folio+", "+
//                     "Evento: "+ props.Event+", "+
//                     "Usuario: "+ props.nameT+", "+
//                     "Fecha: "+ props.date+", "+
//                     "Zona: "+ props.category
//                     } 
//                     size="80"
//                     bgColor="#242565"
//                     fgColor="#fff"
//                     level="L"
//                      />
//                </View>
//                 <View className={s.circles}>
//                 <View className={s.semicirculo}/> 
//                 <View className={s.semicirculo2}/>
//                 </View>
//             </View>
//             <View className={s.titulo}>
//                 <Text>{props.Event}</Text>
//                 <Text>{props.nameT}</Text>
//                 <Text>{props.email}</Text>
//                 <Text><strong>DATE:</strong> {props.date}</Text>
//                 <Text><strong>STAGE:</strong> pendiente</Text>
//                 <Text><strong>ADRESS:</strong> pendiente</Text>
               
//                 {/* <p>adress{props.adress}</p>
//                 <p>Stage{props.stage}</p> */}
//             </View>
//                 <View className={s.divptres}>
//                     <View className={s.ptres}>
//                         <View className={s.divlogo}><Image className={s.logo} src={props.img}/></View>
//                         <Text><strong>Category:</strong> <br/>{props.category}</Text>
//                         <Text>Price: {props.price}</Text>
//                     </View>
//                 </View>
//         </View>
//     </View>
//             </Page>
//         </Document>
//     )
// }