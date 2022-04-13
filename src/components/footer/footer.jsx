
import s from './footer.module.css'

export default function Footer(){
    return(
        <div className={s.contenedor}>
            <div className={s.contenedorInterno}>
            <div className={s.contenido}>
                <div>
                <h3>what do we do?</h3>
                <p>My ticket is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                <div>
                <img/>   
                <img/>
                <img/>
                </div>
                </div>
                <div>
                    <h4>Plan Events</h4>
                    <ul>
                        <li>Create and Set Up</li>
                        <li>Sell Tickets</li>
                    </ul>
                </div>
                <div>
                    <h4>My Ticket</h4>
                    <ul>
                        <li>About us</li>
                        <li>Press</li>
                        <li>Contact us</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>
            </div>
            <div className={s.copyright}></div>

            </div>
        </div>
    )
}