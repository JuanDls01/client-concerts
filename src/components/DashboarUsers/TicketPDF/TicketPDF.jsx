import { MdOutlineQrCode2 } from "react-icons/md";
// import logo from "../../../assets/images/logotipo.png";
import {Document, Page, Text, View, Image} from "@react-pdf/renderer";
import QRCode from 'react-qr-code'
import s from './TicketPDF.module.css'

export default function TicketPDF({props}){
    console.log(props)
    return(
        <Document>
            <Page size="A4">
            <View className={s.container}>
        <View className={s.ticket}>
            <View className={s.pparte}>
               <View className={s.interno}>
               <Text className={s.folio}><strong>No {props.Folio}</strong></Text>
                {/* <MdOutlineQrCode2 className={s.qr}/> */}
                <QRCode  value={
                    "Folio: "+props.Folio+", "+
                    "Evento: "+ props.Event+", "+
                    "Usuario: "+ props.nameT+", "+
                    "Fecha: "+ props.date+", "+
                    "Zona: "+ props.category
                    } 
                    size="80"
                    bgColor="#242565"
                    fgColor="#fff"
                    level="L"
                     />
               </View>
                <View className={s.circles}>
                <View className={s.semicirculo}/> 
                <View className={s.semicirculo2}/>
                </View>
            </View>
            <View className={s.titulo}>
                <Text>{props.Event}</Text>
                <Text>{props.nameT}</Text>
                <Text>{props.email}</Text>
                <Text><strong>DATE:</strong> {props.date}</Text>
                <Text><strong>STAGE:</strong> pendiente</Text>
                <Text><strong>ADRESS:</strong> pendiente</Text>
               
                {/* <p>adress{props.adress}</p>
                <p>Stage{props.stage}</p> */}
            </View>
                <View className={s.divptres}>
                    <View className={s.ptres}>
                        <View className={s.divlogo}><Image className={s.logo} src={props.img}/></View>
                        <Text><strong>Category:</strong> <br/>{props.category}</Text>
                        <Text>Price: {props.price}</Text>
                    </View>
                </View>
        {/* <img src={logo} className={s.imagen} alt={logo} /> */}
        </View>
    </View>
            </Page>
        </Document>
    )
}