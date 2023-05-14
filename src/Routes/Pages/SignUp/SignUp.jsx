import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../assets/images/login/login.svg'
import { AuthContext } from '../../../Providers/AuthProviders';

const SignUp = () => {
    const {createUser}= useContext(AuthContext)


    const handlerSignUp = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password =form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            form.reset()
            // ...
          })
          .catch((error) => {
           
            const errorMessage = error.message;
            console.log(errorMessage)
            // ..
          });

    }



    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <div className=" w-1/2 mr-12">
            <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center">Sign Up </h1>

                    <form onSubmit={handlerSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                       
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                           
                        </div>
                        <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an accout ? <Link
                     to ="/login" className='font-bold text-orange-600'>Sign in</Link></p>

                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;