import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getArtists from "../../redux/actions/getArtists";
import getStages from "../../redux/actions/getStages";
import style from "./EventForm.module.css";
import { BsFillStarFill } from "react-icons/bs";
import logo from "../../assets/images/logotipo.png";

const EventForm = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const stages = useSelector((state) => state.stages);

  useEffect(() => {
    dispatch(getStages());
    dispatch(getArtists());
  }, [dispatch]);

  const [form, setForm] = useState({
    name: "",
    artistId: null,
    eventId: null,
    description: "",
    date: "",
    time: "",
    stock: {
      cat1name: "",
      cat1price: 0,
      cat1stock: 0,
      cat2name: "",
      cat2price: 0,
      cat2stock: 0,
      cat3name: "",
      cat3price: 0,
      cat3stock: 0,
    },
  });

  return (
    <div className={style.pageContainer}>
      {/*HEADER*/}
      <div className={style.logoContainner}>
        <img src={logo} className={style.logo} alt={logo} />
      </div>

      <div className={style.formContainer}>
        <h1 className={style.titleForm}>Create your own event</h1>
        <form autoComplete="off" className={style.formContent}>
          {/*EVENT NAME */}
          <div className={style.name}>
            <label htmlFor="name">Event name:</label>
            <input type="text" name="name" />
          </div>

          {/*ARTIST SELECTION */}
          <div className={style.artist}>
            <label htmlFor="artistId">Artist:</label>
            <select name="artistId">
              {artists.length &&
                artists.map((artist) => (
                  <option value={artist.id} key={artist.id}>
                    {artist.name}
                  </option>
                ))}
            </select>
          </div>

          {/*STAGE SELECTION */}
          <div className={style.stage}>
            <label htmlFor="stageId">Stage:</label>
            <select name="stageId">
              {stages.length &&
                stages.map((stage) => (
                  <option value={stage.id} key={stage.id}>
                    {stage.name}
                  </option>
                ))}
            </select>
          </div>

          {/*EVENT DESCRIPTION */}
          <div className={style.description}>
            <label htmlFor="description">Event description:</label>
            <input type="text" name="description" />
          </div>

          {/*EVENT DATE */}
          <div className={style.date}>
            <label htmlFor="date">Event date:</label>
            <input type="date" min={new Date().toISOString().split("T")[0]} />
          </div>

          {/*EVENT TIME */}
          <div className={style.time}>
            <label htmlFor="date">Time:</label>
            <input type="time" />
          </div>

          {/*EVENT POSTER */}
          <div className={style.img}>
            <label htmlFor="img">Event poster:</label>
            <input type="file" />
          </div>
          {/*EVENT STOCK */}
          <div className={style.stocks}>
            <p>You can set up to three tickets categories</p>
            <div className={style.stockItem}>
              <label htmlFor="cat1_name">
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat1_name" />
              <label htmlFor="cat1_price"> Price: (ARS)</label>
              <input type="number" name="cat1_price" />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat2_name">
                <BsFillStarFill />
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat2_name" />
              <label htmlFor="cat2_price"> Price: (ARS)</label>
              <input type="number" name="cat2_price" />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat3_name">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat3_name" />
              <label htmlFor="cat3_price"> Price: (ARS)</label>
              <input type="number" name="cat3_price" />
            </div>
          </div>
        </form>
      </div>
      <div className={style.formFooter}>FOOTER</div>
    </div>
  );
};

export default EventForm;
