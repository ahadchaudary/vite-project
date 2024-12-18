import React from 'react'
function Props({ card }) {
    return (
      <div>
        {card.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.id || item.name}>
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a href="#" className="btn btn-primary">{item.cart}</a>
            </div>
          </div>
        ))}
      </div>
    );
  }
  

export default Props
