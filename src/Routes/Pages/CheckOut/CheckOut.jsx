
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../../Providers/AuthProviders';

const CheckOut = () => {
    const {user}=useContext(AuthContext)
    const services = useLoaderData()
    const { title, price, _id,img } = services;

    const handlerOderBtn = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const booking = {
            name,
            img,
            date,
            service:title,
            service_id:_id,
            email,
            price:price
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body: JSON.stringify(booking)
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert('service booking successfuly')
            }
        })
    }




    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-5">Book Service : {title} </h1>
            <div className="card-body">
              

                <form onSubmit={handlerOderBtn}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" defaultValue={user?.name} placeholder="Enter Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date"  className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name="price" defaultValue={'$'+ price} className="input input-bordered" />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />

                    </div>
                </form>


            </div>
        </div>
    )
}
export default CheckOut;