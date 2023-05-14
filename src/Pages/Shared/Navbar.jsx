import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthConext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = useContext(AuthConext)
    const handleLogOut = () =>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-base-200 justify-between">
                <div >
                    <p>69-car</p>
                </div>
                <div>
                    <Link
                     className='mx-2 px-2 bg-slate-300' 
                     to='/'>home</Link>
                  
                   {
                    user ? <>
                     <button
                    onClick={handleLogOut}
                    >logout</button>
                    <Link   
                    to='/bookings'
                    className='mx-2 px-2 bg-slate-300' >my bookings</Link>
                    </>
                  :   <>
                  <Link   
                  to='/login'
                  className='mx-2 px-2 bg-slate-300' >login</Link>
                  <Link
                  className='mx-2 px-2 bg-slate-300'
                  to='/signup' >Sign Up</Link>
                  </>
                  
                   }
                  
                  
                   
                </div>
            </div>
        </div>
    );
};

export default Navbar;