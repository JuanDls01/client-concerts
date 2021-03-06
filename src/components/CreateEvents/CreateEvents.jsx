import s from "./CreateEvents.module.css"
import img from '../../assets/images/image3.png'
import { Link } from "react-router-dom";

export default function CreateEvents(){

    return(
        <div className={s.externo}>
            <div className={s.interno}>
                <img src={img} className={s.img} alt={img}/>
            </div>
            <div className={s.event}>
                <h3>Make your own Event</h3>
                <p>On this page registering as a seller you can create events, gaining greater visibility, reach more customers and increase profits</p>
                <div className={s.bttnContainner}>
                    <Link to='/login'><button className={s.bttn}>Create Events</button></Link>
                </div>
            </div>
            
        </div>
    )
}