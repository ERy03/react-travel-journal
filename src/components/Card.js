import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt={props.item.title} />
      <div className="card-content">
        <div className="card-location">
          <p className="location-text"><span className="red"><i className="fas fa-map-marker-alt"></i></span>{props.item.location.toUpperCase()}</p>
          <span className="map-text-gray"><a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a></span>
        </div>
        <h3 className="card-title">{props.item.title}</h3>
        <p>{props.item.startDate} - {props.item.endDate}</p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
}
