import React from "react";
import axios from "axios";
//import ReactAnimatedWeather from "react-animated-weather";


export default function Forecast(props) {

  function showForecast(response) {
    console.log(response);
  }
  //let appKey = `4a3at3d40ab2fo50c8da2bb2428082bd`;
  let appKey = `210d99196a88b9257ed8cb3535a0a0c5`;
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${appKey}&unit=metric`;
  axios.get(url).then(showForecast);
  
  function formatDay(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let day = date.getDay();
    console.log(day);
    let weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    return weekDays[day];
  }

  return (
    <div>
      <hr />
      <div className="col-2">
        <strong>{formatDay(1693306800)}</strong>
        <div className="icons">
        icon
        </div>
        <span className="future-max">
          <strong>{Math.round(25)}°</strong>
        </span>
        <span className="future-min"> {Math.round(36)}°</span>
      </div>
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  );
}
