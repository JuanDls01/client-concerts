import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getArtists from "../../redux/actions/getArtists";
import getStages from "../../redux/actions/getStages";
import style from './EventForm.module.css'
import { BsFillStarFill } from "react-icons/bs";


const EventForm = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const stages = useSelector((state) => state.stages);

  useEffect(() => {
    dispatch(getStages());
    dispatch(getArtists());
  }, [dispatch]);
  
  return (
    <div className={style.mainContainer}>
      
        <div className={style.formHeader}>
          <h1>Create your own event!</h1>
        </div>
        <div className={style.formBody}>
          <form autoComplete="off">
            <div className={style.field}>
              <label htmlFor="name">Event name:</label>
              <input type="text" name="name" />
            </div>
            <div className={style.field}>
              <label htmlFor="artistId">Artist:</label>
              <select name="artistId">
                {artists.length &&
                artists.map((artist)=><option value={artist.id} key={artist.id}>{artist.name}</option>)}
              </select>
            </div>
            <div className={style.field}>
              <label htmlFor="stageId">Stage:</label>
              <select name="stageId">
                {stages.length&&
                stages.map((stage)=><option value={stage.id} key={stage.id}>{stage.name}</option>)}
              </select>
            </div>
            <div className={style.field}>
              <label htmlFor="description">Event description:</label>
              <input type="text" name="description" />
            </div>
            <div className={style.field}>
              <label htmlFor="date">Event date:</label>
              <input type='date' min={new Date().toISOString().split('T')[0]} />
            </div>
            <div className={style.field}>
              <label htmlFor="date">Time:</label>
              <input type="time" />
            </div>
            <div className={style.field}>
              <label htmlFor="img">Event poster:</label>
              <input type="file" />
            </div>
            


            <div className={style.stocksContainer}>
              <p>You can set up to three tickets categories</p>
              <div className={style.stockItem}>                
                  <label htmlFor="cat1_name"><BsFillStarFill /> Category name:</label>
                  <input type="text" name="cat1_name" />
                  <label htmlFor="cat1_price"> Price: (ARS)</label>
                  <input type="number" name="cat1_price" />                
              </div>
              <div className={style.stockItem}>                
                  <label htmlFor="cat2_name"><BsFillStarFill /><BsFillStarFill /> Category name:</label>
                  <input type="text" name="cat2_name" />
                  <label htmlFor="cat2_price"> Price: (ARS)</label>
                  <input type="number" name="cat2_price" />                
              </div>
              <div className={style.stockItem}>                
                  <label htmlFor="cat3_name"><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /> Category name:</label>
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
