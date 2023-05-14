import React from 'react';
import { Link } from 'react-router-dom';
const ServicesCard = ({ service }) => {
    const { _id,title, img, price } = service;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-xl text-orange-500'>Price : ${price} </p>
                    <div className="card-actions">
                        <Link to= {`/checkOut/${_id}`}>
                            <button className="btn btn-primary">Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;