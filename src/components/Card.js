import React from "react";
import locationSVG from "../components/images/Fill-219.svg";

export default function Card(props) {
    console.log(props);
  return (
      <div className="card">
          <img src={`${props.item.imageUrl}`} className="card--image" />  
          <div className="card-column">
            <div className="first-row">
              <img src={locationSVG} className="card--svg" />
              <h3>{props.item.location}</h3>
              <a href={`${props.item.googleMapsUrl}`}>View on Google Maps</a>
            </div>
            <h2>{props.item.title}</h2>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p>{props.item.description}</p>
        </div>
      </div>
  )
}

