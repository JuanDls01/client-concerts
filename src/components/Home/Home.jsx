import EventsCards from '../EventsCards/EventsCards';

//Componentes
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer'

//CSS
import s from "./Home.module.css"

export default function Home(){
    return (
        <div>
            <NavBar/>
            <Hero/>
            <EventsCards/>
            <Footer/>
        </div>
    )
}



