
//Componentes
import Hero from '../Hero/Hero';
import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import CreateEvents from '../CreateEvents/CreateEvents';
import Filter from '../Filters/Filter'
import SearchBars from '../SearchBars/SearchBars';

//CSS
import s from "./Home.module.css"

export default function Home(){

    return (
       
        <div className={s.homeContainner}>
            <div className={s.imgBackground}></div>
            <div className={s.landingPage}>
                <NavBar/>
                <Hero/>
            </div>
            <SearchBars />
            <Filter />
            <EventsCards />
            <CreateEvents/>
            <Footer/>
        </div>
    )
}



