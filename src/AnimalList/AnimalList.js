import React from 'react';
import './AnimalList.css';

export default function AnimalList(props) {
  return (
    <div style={{ top: props.top, left: props.left }} className="animal">
      <img src={`./images/${props.type}.svg`}/>
      <p className="name">{props.name}</p>
      <p className="says">{props.says}</p>
    </div>
  );
}