import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";


import s from './footer.module.css'

export default function Footer(){
    return(
        <div className={s.contenedor}>
            <div className={s.contenedorInterno}>
            <div className={s.contenido}>
                <div>
                <h3>What do we do?</h3>
                <p className={s.parrafo}>My ticket is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                <div className={s.redes}>
                <BsFacebook className={s.iconoFacebook}/>
                <AiFillTwitterCircle className={s.iconoTwitter}/>
                <AiFillLinkedin className={s.iconoLinkedin}/>

                </div>
                </div>
                <div>
                    {/* <h4 className={s.medio}>Plan Events</h4> */}
                    <ul>
                        {/* <li className={s.medioli}>Create and Set Up</li>
                        <li className={s.medioli}>Sell Tickets</li> */}
                    </ul>
                <div className={s.copyright}>
                    <a href="https://github.com/davidvazgon26" className={s.github}>
                <AiFillGithub className={s.icon}/>
                davidvazgon26
                </a>
                <a href="https://github.com/Vegajor1112" className={s.github}>
                <AiFillGithub className={s.icon}/>
                JuanDls01
                </a>
                <a href="https://github.com/davidvazgon26" className={s.github}>
                <AiFillGithub className={s.icon}/>
                Vegajor1112
                </a>
                <a href="https://github.com/Ernest2104" className={s.github}>
                <AiFillGithub className={s.icon}/>
                Ernest2104
                </a>
                <a href="https://github.com/davidvazgon26" className={s.github}>
                <AiFillGithub className={s.icon}/>
                Chris
                </a>
                <a href="https://github.com/davidvazgon26" className={s.github}>
                <AiFillGithub className={s.icon}/>
                Nico
                </a>
                    </div>
                </div>
                <div>
                    <h4 className={s.medio}>My Ticket</h4>
                    <ul>
                        <li className={s.medioli}>About us</li>
                        <li className={s.medioli}>Press</li>
                        <li className={s.medioli}>Contact us</li>
                        <li className={s.medioli}>Privacy</li>
                        <li className={s.medioli}>Terms</li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}>
                <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
            </div>

            </div>
        </div>
    )
}