import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getArtists from "../../redux/actions/getArtists";
import getStages from "../../redux/actions/getStages";

const EventForm = () => {
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const stages = useSelector((state) => state.stages);

  useEffect(() => {
    dispatch(getStages());
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <form>
      <select>
        {artists.length &&
          artists.map((artist) => (
            <option value={artist.id}>{artist.name}</option>
          ))}
      </select>
      <select>
        {stages.length &&
          stages.map((stage) => <option value={stage.id}>{stage.name}</option>)}
      </select>
    </form>
  );
};

export default EventForm;
