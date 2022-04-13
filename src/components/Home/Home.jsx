import EventsCards from '../EventsCards/EventsCards';
import Hero from '../Hero/Hero';
import NavBar from '../NavBar/NavBar';

import s from "./Home.module.css"

export default function Home(){


    return (<div>
            <Hero/>
            <NavBar/>
            <EventsCards />
        </div>
    )
}



