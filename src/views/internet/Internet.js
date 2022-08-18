import React, { useState } from "react";
import { ReactInternetSpeedMeter } from "react-internet-meter";
import "react-internet-meter/dist/index.css";

import HomePage from "./Home";
const Internet = () => {
  const [wifiSpeed, setwifiSpeed] = useState("Checking ... ");
  return (
    <div>
      {/* <ReactInternetSpeedMeter
        txtSubHeading="Internet is too slow"
        outputType="alert"
        customClassName={null}
        txtMainHeading="Opps..."
        pingInterval="4000" // sec
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        callbackFunctionOnNetworkDown={(speed) =>
          console.log(`Internet speed    down ${speed}`)
        }
        callbackFunctionOnNetworkTest={(speed) => setwifiSpeed(speed)}
      /> */}
      <ReactInternetSpeedMeter
        txtSubHeading={"Internet is too slow " + wifiSpeed + " MB/s"}
        outputType="alert"
        customClassName={null}
        txtMainHeading="Opps..."
        pingInterval={3000} // milliseconds
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={8}
        imageUrl="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png"
        downloadSize="2550420" //bytes
        callbackFunctionOnNetworkDown={(speed) =>
          console.log(`Internet speed is down ${speed}`)
        }
        callbackFunctionOnNetworkTest={(speed) => setwifiSpeed(speed)}
      />
      <HomePage wifiSpeed={wifiSpeed} />
    </div>
  );
};
export default Internet;
