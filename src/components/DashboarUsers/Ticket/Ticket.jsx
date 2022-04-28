import { MdOutlineQrCode2 } from "react-icons/md";
// import logo from "../../../assets/images/logotipo.png";
import QRCode from 'react-qr-code'
import s from './Ticket.module.css'

export default function Ticket({props}){

    const result = props.adress.filter(item=>item.id==props.stage)
    
    return(<div className={s.container}>
        <div className={s.ticket}>
            <div className={s.pparte}>
               <div className={s.interno}>
               <p className={s.folio}><strong>No {props.Folio}</strong></p>
                {/* <MdOutlineQrCode2 className={s.qr}/> */}
                <QRCode  value={
                    "Folio: "+props.Folio+", "+
                    "Evento: "+ props.Event+", "+
                    "Usuario: "+ props.nameT+", "+
                    "Fecha: "+ props.date+", "+
                    "Zona: "+ props.category
                    } 
                    bgColor="#242565"
                    size={80}
                    fgColor="#fff"
                    level="L"
                     />
               </div>
                <div className={s.circles}>
                <div className={s.semicirculo}/> 
                <div className={s.semicirculo2}/>
                </div>
            </div>
            <div className={s.titulo}>
                <h3>{props.Event}</h3>
                <p>{props.nameT}</p>
                <p>{props.email}</p>
                <p><strong>DATE:</strong> {props.date}</p>
                <p><strong>STAGE:</strong> {result[0].name}</p>
                <p><strong>ADRESS:</strong> {result[0].address}</p>
               
                {/* <p>adress{props.adress}</p>
                <p>Stage{props.stage}</p> */}
            </div>
                <div className={s.divptres}>
                    <div className={s.ptres}>
                        <div className={s.divlogo}><img className={s.logo} src={props.img}/></div>
                        <p><strong>Category:</strong> <br/>{props.category}</p>
                        <p>Price: {props.price}</p>
                    </div>
                </div>
        {/* <img src={logo} className={s.imagen} alt={logo} /> */}
        </div>
    </div>)
}