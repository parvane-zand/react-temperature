import React from "react";

export default function ConvertDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satureday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <h6>
      {days[props.date.getDay()]} {props.date.getHours()}:
      {props.date.getMinutes()} , {months[props.date.getMonth()]}{" "}
      {props.date.getDate()}, {props.date.getFullYear()}
    </h6>
  );
}
