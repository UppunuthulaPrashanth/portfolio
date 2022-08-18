import React from "react";
import SingleCard from "./SingleCard";
import "./styles.css";
const HomePage = ({ wifiSpeed }) => {
  const data = [
    // {
    //   iconName: "car-sport-outline",
    //   txtMain: "Tesla",
    //   txtInfo: "80%",
    //   key: "1"
    // },
    // {
    //   iconName: "headset-outline",
    //   txtMain: "Headset",
    //   txtInfo: "80%",
    //   key: "2"
    // },
    {
      iconName: "fa fa-thermometer",
      txtMain: "Temperature",
      txtInfo: "17°C",
      key: "3"
    },
    {
      iconName: "fa fa-wifi",
      txtMain: "Wifi",
      txtInfo: `${wifiSpeed} MB/s`,
      key: "4"
    }
  ];
  return (
    <div className="home-container">
      <p>Prash Smart App</p>
      <div className="card-container">
        {data.map((item) => (
          <SingleCard {...item} />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
