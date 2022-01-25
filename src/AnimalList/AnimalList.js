import React from 'react';

export default function AnimalList(props) {
  console.log(props.name);
  return (
    <p>{props.name}</p>
  );
}