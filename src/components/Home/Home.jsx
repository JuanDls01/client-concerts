import { useSelector } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";

//Componentes
import Hero from "../Hero/Hero";
import EventsCards from "../EventsCards/EventsCards";
import NavBar from "../NavBar/NavBar";
import Footer from "../footer/footer";
import CreateEvents from "../CreateEvents/CreateEvents";
import Filter from "../Filters/Filter";
import SearchBars from "../SearchBars/SearchBars";

//CSS
import s from "./Home.module.css";
import { IoCaretBackCircleSharp, IoCaretForwardCircleSharp } from "react-icons/io5";

export default function Home() {
  const token = useSelector((state) => state.token);
  const events = useSelector((state) => state.events);
// console.log(events)

  return (
    <div className={s.homeContainner}>
      {token === "" ? (
        <div>
          <div className={s.imgBackground}></div>
          <div className={s.landingPage}>
            <NavBar />
            <Hero />
          </div>
        </div>
      ) : (
        <NavBar />
      )}
      <SearchBars />
      <Filter />
        <div className={s.contenedorCarrusel}>
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={events.length}
        isPlaying="true"
        interval="3000"
        className={s.carrusel}
      >
        <ButtonBack className={s.CtbtnBack}> <IoCaretBackCircleSharp className={s.btnBack}/></ButtonBack>

        <Slider>
          {events.length &&
            events.map((event) => {
              {/* console.log(event); */}

              return (
                <Slide key={event.id}>
                <Link to={`/${event.id}`} >
                  <img 
                  key={event.id}
                  src={event.img} 
                  alt="imagenes del carrusel"
                  className={s.imgCarrusel}
                  ></img></Link>
                  
                </Slide>
              );
            })}
        </Slider>
        <ButtonNext className={s.CtbtnNext}><IoCaretForwardCircleSharp className={s.btnNext}/></ButtonNext>
      </CarouselProvider>
        </div>
      <EventsCards />
      {token === "" ? <CreateEvents /> : null}
      <Footer />
    </div>
  );
}
