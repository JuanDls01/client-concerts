import s from "./Hero.module.css";
import logo from "../../assets/images/logotipo.png";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import CreateStage from "../CreateStage/CreateStage";
// import Contact from "../Contact/Contact";
// import ArtistForm from "../registerArtist/RegisterArtist";

export default function Hero() {
  // const [modal, setModal] = useState(false);
  // const [modal2, setModal2] = useState(false);

  // const openStageModal = () => {
  //   setModal(true);
  // };
  // const closeStageModal = () => {
  //   setModal(false);
  // };
  // const openModal2 = () => {
  //   setModal2(true);
  // };
  // const closeModal2 = () => {
  //   setModal2(false);
  // };

  return (
    <div className={s.externo}>
      <div className={s.imgContainner}>
        <img src={logo} className={s.imagen} alt={logo} />
      </div>
      <div className={s.infoContainner}>
        <h4 className={s.titulo}>
          My ticket is the site with the best fashion events and your favorite
          artists
        </h4>
        <p className={s.parrafo}>
          Find the best events, artists, concerts, plays and more. Plus
          everything from the comfort of your home. Search them by place, date,
          or artist{" "}
        </p>
        <div className={s.bttns}>
          {/* <button onClick={openStageModal} className={s.btn1}>
            Get Ticket
          </button>
          {modal && <CreateStage closeStageModal={closeStageModal} />} */}
          <Link to="/login">
            <button className={s.btn1}>Get Ticket</button>
          </Link>
          <Link to="/contact">
            <button className={s.btn2}>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
