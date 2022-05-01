import { useSelector } from "react-redux";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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

export default function Home() {
  const token = useSelector((state) => state.token);
  const events = useSelector((state) => state.events);
  console.log(events);

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
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
        isPlaying="true"
        interval="3000"
      >
        <Slider>
          {events.length &&
            events.map((event) => {
              return (
                <Slide>
                  <img src={event.img}></img>
                </Slide>
              );
            })}
        </Slider>
      </CarouselProvider>
      <EventsCards />
      {token === "" ? <CreateEvents /> : null}
      <Footer />
    </div>
  );
}
