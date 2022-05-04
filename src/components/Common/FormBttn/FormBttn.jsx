import React, { useEffect, useState } from "react";
import style from "./FormBttn.module.css";

const FormBttn = ({ inputErros, firstValue, text }) => {
  const [disable, setDisable] = useState(true);

  useEffect(() => {
    if (Object.keys(inputErros).length === 0 && firstValue) setDisable(false);
    else setDisable(true);
  });

  return (
    <button
      type="submit"
      disabled={disable}
      className={disable ? style.bttndisabled : style.bttnsubmit}
    >
      {text}
    </button>
  );
};

export default FormBttn;
