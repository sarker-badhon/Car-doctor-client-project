import React from 'react';

const BookingRowCard = ({ booking,handlerDelete }) => {
    const { _id,img, price, name, email, date, service } = booking;



    return (
        <tr>
            <th>
                <button onClick={() => handlerDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>

                <div className="avatar">
                    <div className="mask w-24 h-24 rounded m ">
                        {img && <img src={img} alt="" />}
                    </div>
                </div>
            </td>
            <td> {service} </td>
            <td> {email} </td>
            <td> {date} </td>
            <td> {price} </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>

    );
};

export default BookingRowCard;