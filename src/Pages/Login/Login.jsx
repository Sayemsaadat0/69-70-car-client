import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthConext } from '../../Provider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthConext)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signInUser(email, password)
            .then(result => {
                const user = result.user
                const loggedUser = {
                    email: user.email
                }
                console.log(loggedUser)
                fetch('http://localhost:7979/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('jwt:', data)
                        localStorage.setItem('access-token-car', data.token)
                        navigate(from, { replace: true })

                    })

            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>

                    <form onSubmit={handleLogin}  >
                        <div
                            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
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
                                        name="password"
                                        className="input input-bordered"
                                        required />

                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>

                                    <p className='mt-5 '>
                                        new to 69car?
                                        <Link className='text-red-600' to='/signup'>
                                            Signup
                                        </Link>
                                    </p>

                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;