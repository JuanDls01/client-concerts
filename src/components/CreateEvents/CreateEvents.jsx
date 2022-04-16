

import s from "./CreateEvents.module.css"
import img from '../../assets/images/image3.png'

export default function CreateEvents(){

    return(
        <div className={s.externo}>
            <div className={s.interno}>
                <img src={img} className={s.img}/>
            </div>
                <div className={s.event}>
                    <h3>Make your own Event</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <li className={s.btn}>Create Events</li>
        </div>
    )
}