// Componentes a renderizar:
import EventsCards from '../EventsCards/EventsCards';
import NavBar from '../NavBar/NavBar';
import Footer from '../footer/footer';
import Filter from '../Filters/Filter';
import SearchBars from '../SearchBars/SearchBars';
import useRoleProtected from '../Hooks/useRoleProtected';

import style from './HomeRegUser.module.css';

const HomeRegUser = () => {
    useRoleProtected('user');
    return (
        <div>
            <h1>User Dashboard</h1>
            <NavBar />
            <SearchBars />
            <Filter />
            <EventsCards />
            <Footer />
        </div>
    )
}

export default HomeRegUser;