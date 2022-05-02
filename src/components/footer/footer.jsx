import {BsFacebook} from "react-icons/bs";
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from "react-icons/ai";
import { Link } from "react-router-dom";


import s from './footer.module.css'

export default function Footer(){
    return(
        <div className={s.contenedor}>
            {/* <div className={s.contenedorInterno}> */}
            <div className={s.contenido}>
                <div className={s.infoPage}>
                    <h3 className={s.title}>What do we do?</h3>
                    <p className={s.parrafo}>My ticket is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                    <div className={s.redes}>
                        {/* <BsFacebook className={s.iconoFacebook}/>
                        <AiFillTwitterCircle className={s.iconoTwitter}/>
                        <AiFillLinkedin className={s.iconoLinkedin}/> */}
                    </div>
                </div>
                <div className={s.githubs}>
                    <a href="https://github.com/davidvazgon26" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        David
                    </a>
                    <a href="https://github.com/JuanDls01" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        Juan
                    </a>
                    <a href="https://github.com/Vegajor1112" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        Jorge
                    </a>
                    <a href="https://github.com/Ernest2104" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        Ernesto
                    </a>
                    <a href="https://github.com/raffagapro" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        Chris
                    </a>
                    <a href="https://github.com/nicopalomares" className={s.github}>
                        <AiFillGithub className={s.icon}/>
                        Nicolas
                    </a>
                </div>
                <div className={s.infoContact}>
                    <h4 className={s.titleInfo}>My Ticket</h4>
                    <div className={s.listaInfo}>
                        <ul >
                            <li className={s.medioli}>About us</li>
                            {/* <li className={s.medioli}>Press</li> */}
                            {/* <li className={s.medioli}>Privacy</li> */}
                            <a href="https://docs.google.com/document/d/e/2PACX-1vRYxyYleXgPa5ZhepQIMXfAuvE3OLJhRxhtiEHcqaunlnEzRVFv3vi-3ytEFcbLjbi27pnhQjkh1sam/pub" target="_blank" rel="noop"className={s.contact}>
                            <li className={s.medioli}>Terms</li>
                            </a>
                            <Link to="/contact" className={s.contact}>
                            <li className={s.medioli}>Contact us</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={s.copyright}>
                <p>Copyright © 2022 Grupo 2 Cohorte 22b de Henry</p>
            </div>

            {/* </div> */}
        </div>
    )
}