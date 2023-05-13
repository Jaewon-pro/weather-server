"use client"

import { useState } from 'react';
import MainMenu from './lib/navbar/navbar';

function Header({ title }: { title?: string })  {
  return <h1>{title ? title : 'Default title'}</h1>;
}

export default function Home() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <MainMenu />
      <Header title="IOT" />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}
