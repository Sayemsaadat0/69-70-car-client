import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthConext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthConext)

    const handlesignUp = event => {
        console.log('clicked')
        event.preventDefault()

        const form  = event.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value 
        const confirm = form.confirm.value 
        console.log(name, email, password)

   createUser(email,password)
        .then(result =>{
            const user = result.user 
            console.log(user)
        })
        .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <form onSubmit={handlesignUp}>
                        <div
                            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input
                                        name="name"
                                        type="name"
                                        placeholder="email" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="email" className="input input-bordered"
                                        required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name="confirm"
                                        className="input input-bordered"
                                        required />
                                    <label className="label">
                                        <span className="label-text">confirim Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="password"
                                        name="password"
                                        className="input input-bordered"
                                        required />
                                   
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                        <p className='mt-5 '>
                                           have an accunt?
                                             <Link className='text-red-600' to='/login'>
                                            login
                                            </Link>
                                        </p>
                               
                                </div>
                                    <button type='submit' className="btn btn-primary">Sign up</button>
                                {/* <div className="form-control mt-6">
                                </div> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;