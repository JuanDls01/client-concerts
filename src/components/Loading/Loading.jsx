import React from 'react';
import style from './Loading.module.css'
import {RotatingLines} from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className={style.container}>
      <div className={style.loader}>
        {/* <RotatingLines width="100" strokeColor="#FF5733" /> */}
      </div>
    </div>
  )
}

export default Loading;
