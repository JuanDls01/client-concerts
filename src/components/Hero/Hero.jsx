
import s from "./Hero.module.css"
import logo from '../../assets/images/logotipo.png'

export default function Hero(){


    return (<div className={s.externo}>
        <div className={s.body}>
        </div>
        <img src={logo} className={s.imagen}/>
        <h4 className={s.titulo}>My ticket is the site with the best fashion events and your favorite artists</h4>
        <p className={s.parrafo}>Find the best events, artists, concerts, plays and more. Plus everything from the comfort of your home. Search them by place, date, artist or genre </p>
        <ul>
            <li className={s.btn1}>Get Ticket</li>
            <li className={s.btn2}>Learn More</li>
        </ul>
    </div>
    )
}