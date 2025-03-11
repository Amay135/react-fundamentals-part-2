import Ract, { useState } from 'react';
import heroes from './data';
import HeroCard from './HeroCard';

export default function App() {
  return (
    <div className="container my-4">
      <h1>Mobile Legends Heroes</h1>
      <div className="row justify-content-start">
        {heroes.map(hero => (
          <div className="col-md-4 col-sm-6 d-flex justify-content-end" key={hero.id}>
            <HeroCard data={hero} />
          </div>
        ))}
      </div>
    </div>
  );
}