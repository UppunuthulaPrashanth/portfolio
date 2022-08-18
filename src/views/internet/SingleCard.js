import React from "react";
const SingleCard = ({ iconName, txtMain, txtInfo }) => {
  return (
    <span className="card">
      <span className="card-main-heading">{txtMain}</span>
      <span className="card-info">
        <i className={iconName}></i>
        <span className="card-info-msg">{txtInfo}</span>
      </span>
    </span>
  );
};
export default SingleCard;
