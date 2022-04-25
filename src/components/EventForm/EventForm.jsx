import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import getArtists from "../../redux/actions/getArtists";
import getStages from "../../redux/actions/getStages";
import axios from "axios";
import RegisterArtist from "../registerArtist/RegisterArtist";
import useRoleProtected from "../Hooks/useRoleProtected";
import style from "./EventForm.module.css";
import { BsFillStarFill } from "react-icons/bs";
import logo from "../../assets/images/logotipo.png";
import { CreateStage } from "../CreateStage/CreateStage";
import Swal from "sweetalert2";

const EventForm = () => {
  useRoleProtected("vendedor");
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const stages = useSelector((state) => state.stages);
  const user = useSelector((state) => state.user);

  const [artistModal, setArtistModal] = useState(false);
  const [stageModal, setStageModal] = useState(false);

  useEffect(() => {
    dispatch(getStages());
    dispatch(getArtists());
  }, [dispatch, artistModal, stageModal]);

  const handleArtistModal = () => {
    setArtistModal(!artistModal);
  };
  const handleStageModal = () => {
    setStageModal(!stageModal);
  };

  const [capacity, setCapacity] = useState(null);

  const [form, setForm] = useState({
    name: "",
    artistId: null,
    stageId: null,
    description: "",
    date: "",
    time: "00:00",
    img: "",
    userId: user.id,
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

  useEffect(() => {
    dispatch(getStages());
    dispatch(getArtists());
  }, [dispatch]);

  useEffect(() => {
    setForm({ ...form, userId: user.id });
  }, [user]);

  const submit = async () => {
    const toSell =
      parseInt(form.stock.cat1stock) +
      parseInt(form.stock.cat2stock) +
      parseInt(form.stock.cat3stock);
    toSell > capacity
      ? Swal.fire({
          title: "Wait a sec...",
          text: `This stage has a capacity for ${capacity} people. 
          You are trying to sell ${toSell} tickets`,
          icon: "error",
          confirmButtonText: "Fix it!",
        })
      : axios.post("http://localhost:3001/event", form);
  };

  const handleChange = (e) => {
    console.log("Change");
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    property === "stageId" &&
      setCapacity(
        stages.filter((stage) => {
          return stage.id == value;
        })[0].capacity
      );
  };

  const handleStockChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      stock: {
        ...form.stock,
        [property]: value,
      },
    });
  };
  const showWidget = (widget) => {
    widget.open();
  };
  let widget = window.cloudinary.createUploadWidget(
    {
      cloudName: "dnn295qhb",
      uploadPreset: "p0wnqu9l",
    },
    (error, result) => {
      result.event === "success" && setForm({ ...form, img: result.info.url });
    }
  );

  return (
    <div className={style.pageContainer}>
      <div className={style.logoContainner}>
        <img src={logo} className={style.logo} alt={logo} />
      </div>

      <div className={style.formContainer}>
        <h1 className={style.titleForm}>Create your own event</h1>
        <form autoComplete="off" className={style.formContent}>
          {/*EVENT NAME */}
          <div className={style.formHeader}>
            <input
              type="text"
              name="name"
              placeholder="Event Name"
              onChange={handleChange}
              value={form.name}
            />

            {/*EVENT DESCRIPTION */}
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Event description"
            />

            {/*ARTIST SELECTION */}

            <select name="artistId" onChange={handleChange}>
              <option>Select an artist...</option>
              {artists.length &&
                artists.map((artist) => (
                  <option value={artist.id} key={artist.id}>
                    {artist.name}
                  </option>
                ))}
            </select>

            {/*ARTIST CREATION*/}
            <div>
              <span>Not in the list?</span>
              <button type="button" onClick={handleArtistModal}>
                Create Artist
              </button>
              {artistModal && <RegisterArtist onClose={handleArtistModal} />}
            </div>

            {/*STAGE SELECTION */}

            <select name="stageId" onChange={handleChange}>
              <option>Select a stage...</option>
              {stages.length &&
                stages.map((stage) => (
                  <option value={stage.id} key={stage.id}>
                    {stage.name}
                  </option>
                ))}
            </select>

            {/*STAGE CREATION*/}
            <div>
              <span>Not in the list?</span>
              <button type="button" onClick={handleStageModal}>
                Create Stage
              </button>
              {stageModal && <CreateStage closeStageModal={handleStageModal} />}
            </div>

            {/*EVENT DATE */}

            <input
              type="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              onChange={handleChange}
              value={form.date}
            />

            {/*EVENT TIME */}

            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={form.time}
            />
          </div>

          {/*EVENT POSTER */}
          <div className={style.formBody}>
            <div>
              <button type="button" onClick={() => showWidget(widget)}>
                Upload the event poster
              </button>
            </div>
            {form.img && <img src={form.img} className={style.imgPreview} />}
          </div>

          {/*EVENT STOCK */}
          <p>You can set up to three tickets categories</p>
          {capacity && <p>ATTENTION! The selected stage allows {capacity}!</p>}
          <div className={style.stocks}>
            <div className={style.stockItem}>
              <label htmlFor="cat1name">
                <BsFillStarFill />
              </label>
              <input
                type="text"
                name="cat1name"
                onChange={handleStockChange}
                placeholder="Category name"
              />
              <label htmlFor="cat1price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat1price"
                onChange={handleStockChange}
              />
              <input
                type="text"
                name="cat1stock"
                onChange={handleStockChange}
              />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat2name">
                <BsFillStarFill />
                <BsFillStarFill />
              </label>
              <input
                type="text"
                name="cat2name"
                onChange={handleStockChange}
                placeholder="Category name"
              />
              <label htmlFor="cat2price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat2price"
                onChange={handleStockChange}
              />
              <input
                type="text"
                name="cat2stock"
                onChange={handleStockChange}
              />
            </div>
            <div className={style.stockItem}>
              <label htmlFor="cat3name">
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </label>
              <input
                type="text"
                name="cat3name"
                onChange={handleStockChange}
                placeholder="Category name"
              />
              <label htmlFor="cat3price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat3price"
                onChange={handleStockChange}
              />
              <input
                type="text"
                name="cat3stock"
                onChange={handleStockChange}
              />
            </div>
          </div>
          <button type="button" onClick={submit}>
            POST
          </button>
        </form>
      </div>
      <div className={style.formFooter}>FOOTER</div>
    </div>
  );
};

export default EventForm;
