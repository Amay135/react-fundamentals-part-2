import React, { useState } from "react";

export default function HeroCard({ data }) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="card mb-4" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt={data.name} />
      <div className="card-body">
        <h5 className="card-title">{data.name}</h5>
        {detailsVisible && <p className="card-text">{data.description}</p>}
        <button className="btn btn-primary" onClick={() => setDetailsVisible(!detailsVisible)}>
          {detailsVisible ? "Sembunyikan" : "Selengkapnya"}
        </button>
      </div>
    </div>
  );
}
