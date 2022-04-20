import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getArtists from "../../redux/actions/getArtists";
import getStages from "../../redux/actions/getStages";

import useRoleProtected from "../Hooks/useRoleProtected";
import style from "./EventForm.module.css";
import { BsFillStarFill } from "react-icons/bs";
import logo from "../../assets/images/logotipo.png";


const EventForm = () => {
  useRoleProtected('vendedor');
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
    stageId: null,
    description: "",
    date: "",
    time: "00:00",
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

  const handleChange=(e)=>{
    const property = e.target.name;
    const value=e.target.value;
    setForm({...form,[property]:value})
  }

  const handleStockChange=(e)=>{
    const property = e.target.name;
    const value=e.target.value;
    setForm({...form,stock:{
      ...form.stock,[property]:value
    }})
  }

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
            <input type="text" name="name" onChange={handleChange} value={form.name} />
          </div>

          {/*ARTIST SELECTION */}
          <div className={style.artist}>
            <label htmlFor="artistId">Artist:</label>
            <select name="artistId" onChange={handleChange}>
                  <option></option>
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
            <select name="stageId" onChange={handleChange}>
            <option></option>
              {stages.length &&
                stages.map((stage) => (
                  <option value={stage.id} key={stage.id}>
                    {stage.name}
                  </option>
                ))}
            </select>
          </div>

          {/*EVENT DESCRIPTION */}
          <div className={style.description} onChange={handleChange}>
            <label htmlFor="description">Event description:</label>
            <input type="text" name="description" />
          </div>

          {/*EVENT DATE */}
          <div className={style.date}>
            <label htmlFor="date">Event date:</label>
            <input type="date" name="date" min={new Date().toISOString().split("T")[0]} onChange={handleChange} value={form.date} />
          </div>

          {/*EVENT TIME */}
          <div className={style.time}>
            <label htmlFor="time">Time:</label>
            <input type="time" name="time" onChange={handleChange} value={form.time}/>
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
              <label htmlFor="cat1name">
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat1name" onChange={handleStockChange}  />
              <label htmlFor="cat1price"> Price: (ARS)</label>
              <input type="number" name="cat1price" onChange={handleStockChange} />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat2name">
                <BsFillStarFill />
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat2name" onChange={handleStockChange} />
              <label htmlFor="cat2price"> Price: (ARS)</label>
              <input type="number" name="cat2price" onChange={handleStockChange} />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat3name">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill /> Category name:
              </label>
              <input type="text" name="cat3name"  onChange={handleStockChange}/>
              <label htmlFor="cat3price"> Price: (ARS)</label>
              <input type="number" name="cat3price" onChange={handleStockChange} />
            </div>
          </div>
        </form>
      </div>
      <div className={style.formFooter}>FOOTER</div>
    </div>
  );
};

export default EventForm;
