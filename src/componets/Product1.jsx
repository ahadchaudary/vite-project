import React from 'react'
import { product } from '../data/data'

const Product1 = () => {
    return (
        <div className="container">
            <div className="row">
                {
                    product.map((x) => {
                        return (
                            <div className="col-sm-6 col-md-4 col-lg-3 col-12 my-3">
                            <div className="card" style={{ width: '100%' }}>
                                <img src={x.Image} className="card-img-top" alt="..."  style={{aspectRatio:3/2,objectFit:'cover'}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{x.name}</h5>
                                    <p className="card-text">{x.age}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default Product1
