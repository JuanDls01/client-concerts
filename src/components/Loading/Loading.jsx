import React from 'react';
import style from './Loading.module.css'
// import {RotatingLines} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className={style.ring}>Loading
      <span></span>
        {/* <RotatingLines width="100" strokeColor="#FF5733" /> */}
    </div>
  )
}

export default Loading;
