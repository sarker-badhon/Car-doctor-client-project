import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const {signInUser}=useContext(AuthContext)

    const handlerLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password =form.password.value;
        console.log(email, password);

        signInUser(email,password)
        .then((result) => {
            const user=result.user
            const loggedUser ={
                email:user.email
            }
            console.log(loggedUser)
            form.reset()

            fetch('http://localhost:5000/jwt',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
            })
            .then((res) =>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('car-doctor-token',data.token)
            })
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
  

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-12">

                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-5xl font-bold text-center">Login </h1>

                            <form onSubmit={handlerLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />
                                        
                                </div>
                            </form>
                            <p className='text-center'>New to car doctor ? <Link to="/signUp" className='font-bold text-orange-600'>Sign Up</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;