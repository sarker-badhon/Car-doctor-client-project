import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import BookingRowCard from './BookingRowCard/BookingRowCard';

const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBooking] = useState([])
  const url = `http://localhost:5000/bookings?.email=${user.email}`
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBooking(data)
      })
  }, [])

  const handlerDelete = id =>{
    const processed = confirm("are you sure delete")
    if(processed){
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.deletedCount>0){
              alert('delete successful')
              const reaming = bookings.filter(book =>book._id !== id)
              setBooking(reaming)
            }
        })
    }
   
}





  return (
    <div>
      <h2> All Booking : {bookings.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Price</th>
              <th>Details</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
           {
              bookings.map(booking => <BookingRowCard
              
                key={booking._id}
                booking={booking}
                handlerDelete={handlerDelete}

              ></BookingRowCard>)
           }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Bookings;