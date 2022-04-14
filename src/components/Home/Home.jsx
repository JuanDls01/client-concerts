
//Componentes
import Hero from '../Hero/Hero';
import EventDetail from '../EventDetail/EventDetail';

import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer'

//CSS
import s from "./Home.module.css"

export default function Home(){
    return (
        <div>
            <NavBar/>
            <Hero/>
            <EventDetail/>
            <EventsCards/>
            <Footer/>
        </div>
    )
}



