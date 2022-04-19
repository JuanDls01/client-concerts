// Componentes a renderizar:
import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import Filter from '../Filters/Filter';
import SearchBars from '../SearchBars/SearchBars';

import style from './HomeRegUser.module.css';

const HomeRegUser = () => {
    return (
        <div>
            <NavBar />
            <SearchBars />
            <Filter />
            <EventsCards />
            <Footer />
        </div>
    )
}

export default HomeRegUser;