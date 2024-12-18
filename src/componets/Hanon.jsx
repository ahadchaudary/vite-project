import React from 'react';

function Hanon({ name = [] }) {
  return (
    <div className="container">
      <div className="row">
        {name.map((object) => (
          <div key={object.id} className="col-sm-6 col-lg-3 col-md-4">
            <div className="card" style={{ width: '100%' }}>
              <img
                src={object.image}
                className="card-img-top"
                alt={object.title || "Card Image"}
              />
              <div className="card-body">
                <h5 className="card-title">{object.title}</h5>
                <p className="card-text">{object.text}</p>
                <a href={object.link || "#"} className="btn btn-primary">
                  {object.buttonText || "Learn More"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hanon;
