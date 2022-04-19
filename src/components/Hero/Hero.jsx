
import s from "./Hero.module.css"
import logo from '../../assets/images/logotipo.png'

export default function Hero(){


    return (
    <div className={s.externo}>
        <div className={s.imgContainner}>
            <img src={logo} className={s.imagen} alt={logo}/>
        </div>
        <div className={s.infoContainner}>
            <h4 className={s.titulo}>My ticket is the site with the best fashion events and your favorite artists</h4>
            <p className={s.parrafo}>Find the best events, artists, concerts, plays and more. Plus everything from the comfort of your home. Search them by place, date, artist or genre </p>
            <div className={s.bttns}>
                <button className={s.btn1}>Get Ticket</button>
                <button className={s.btn2}>Learn More</button>
            </div>
           
        </div>
    </div>
    )
}