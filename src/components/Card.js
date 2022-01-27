import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.item.imageUrl} alt={props.item.title} />
      </div>
      <div className="card-content">
        <h3>{props.item.title}</h3>
        <p>{props.item.description}</p>
      </div>
      <div className="card-action">
        <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-map-marked-alt"></i>
        </a>
        <a href={props.item.googleMapsUrl} target="_blank" rel="noopener noreferrer">
          <i className="fas fa-calendar-alt"></i>
        </a>
      </div>
    </div>
  );
}
