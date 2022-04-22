import { useSelector } from 'react-redux';


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
    const token = useSelector((state) => state.token);

    return (
       
        <div className={s.homeContainner}>
            {
                token === ''?
                <div>
                    <div className={s.imgBackground}></div>
                    <div className={s.landingPage}>
                        
                        <Hero/>
                    </div>
                </div>:
                <NavBar/>
            }
            <SearchBars />
            <Filter />
            <EventsCards />
            <CreateEvents/>
            <Footer/>
        </div>
    )
}



