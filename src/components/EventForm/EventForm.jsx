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
import LoadingOverlay from "react-loading-overlay";
import { Navigate, useNavigate } from "react-router-dom";

const EventForm = () => {
  useRoleProtected("vendedor");
  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists);
  const stages = useSelector((state) => state.stages);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

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
  const [isActive, setIsActive] = useState(false);

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
    try {
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
        : setIsActive(true);
      const response = await axios.post("/event", form);

      Swal.fire({
        title: "Success",
        text: `Your events has been created. You can check it in our events section`,
        icon: "success",
        confirmButtonText: "Fix it!",
      });
      navigate("/");
    } catch (error) {
      setIsActive(false);
      Swal.fire({
        title: "Todo mal",
        text: `${error}`,
        icon: "error",
        confirmButtonText: "Fix it!",
      });
    }
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
              className={style.input}
            />

            {/*EVENT DESCRIPTION */}
            <input
              type="text"
              name="description"
              onChange={handleChange}
              placeholder="Event description"
              className={style.input}
            />

            {/*ARTIST SELECTION */}

            <select
              name="artistId"
              onChange={handleChange}
              className={style.input}
            >
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
              <button
                type="button"
                onClick={handleArtistModal}
                className={style.bttnsubmit}
              >
                Create Artist
              </button>
              {artistModal && <RegisterArtist onClose={handleArtistModal} />}
            </div>

            {/*STAGE SELECTION */}

            <select
              name="stageId"
              onChange={handleChange}
              className={style.input}
            >
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
              <button
                type="button"
                onClick={handleStageModal}
                className={style.bttnsubmit}
              >
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
              className={style.input}
            />

            {/*EVENT TIME */}

            <input
              type="time"
              name="time"
              onChange={handleChange}
              value={form.time}
              className={style.input}
            />
          </div>

          {/*EVENT POSTER */}
          <div className={style.formBody}>
            <div>
              <button
                type="button"
                onClick={() => showWidget(widget)}
                className={style.bttnsubmit}
              >
                Upload the event poster
              </button>
            </div>
            {form.img && <img src={form.img} className={style.imgPreview} />}
          </div>

          {/*EVENT STOCK */}
          <p>You can set up to three tickets categories</p>
          {capacity && (
            <p className={style.warning}>
              ATTENTION! The selected stage allows {capacity}!
            </p>
          )}
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
                className={style.input}
              />
              <label htmlFor="cat1price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat1price"
                onChange={handleStockChange}
                className={style.input}
                placeholder="Category Price"
              />
              <input
                type="text"
                name="cat1stock"
                onChange={handleStockChange}
                className={style.input}
                placeholder="Category Stock"
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
                className={style.input}
              />
              <label htmlFor="cat2price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat2price"
                onChange={handleStockChange}
                className={style.input}
              />
              <input
                type="text"
                name="cat2stock"
                onChange={handleStockChange}
                className={style.input}
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
                className={style.input}
              />
              <label htmlFor="cat3price"> Price: (ARS)</label>
              <input
                type="number"
                name="cat3price"
                onChange={handleStockChange}
                className={style.input}
              />
              <input
                type="text"
                name="cat3stock"
                onChange={handleStockChange}
                className={style.input}
              />
            </div>
          </div>
          <button type="button" onClick={submit} className={style.bttnsubmit}>
            POST
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;