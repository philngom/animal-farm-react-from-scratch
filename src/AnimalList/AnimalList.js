import React from 'react';

export default function AnimalList(props) {
  return (
    <div className="animal">
      <img src={`./images/${props.type}.svg`}/>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <p>{props.says}</p>
    </div>
  );
}