import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

export default function Main(props) {
  return (
    <main className="main">
      {
        props.animals.map((animal, i) =>
          <AnimalList
            key={animal.name + i}
            {...animal}/>
        )
      }
    </main>
  );
}