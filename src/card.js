// import React from 'react';
import style from "./card.module.css";

function Card({ title, subTitle, imgUrl, body }) {
  return (
    <div className={style.cardcontainer}>
      <div className={style.imagecontainer}>
        <img src={imgUrl} alt="" />
      </div>
      <div className={style.cardtitle}>
        <h2> Seven Wonders - {title}</h2>
        <h3> Location - {subTitle}</h3>
      </div>
      <div className={style.cardbody}>
        <p> {body} </p>
      </div>
    </div>
  );
}

export default Card;
