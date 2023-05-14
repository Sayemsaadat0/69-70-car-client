import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import  { AuthConext } from '../Provider/AuthProvider';

const CheckOut = () => {
    const service = useLoaderData()
    const {user} = useContext(AuthConext)
    const { title, _id , price, img } = service

    const handleBookService = event => {
    event.preventDefault()
   

    const form = event.target 
    const name = form.name.value 
    const email = form.email.value
    const date = form.date.value
    const phoneNo = form.phoneNo.value
    const due = form.due.value
    const booking = {
        customerName : name ,
        email,
        date,
        price : price ,
        service_id : _id,
        service : title,
        img

    }
    console.log(booking)

    fetch('http://localhost:7979/bookings',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
       if(data.insertedId){
        alert('marahaba')
       }
    })



   /*  fetch('http://localhost:7979/bookings',{
        method: 'POST',
        headers :{
            'content-type' : 'application/json'
        },
        body: JSON.stringify(booking) 
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    }) */
}



    return (
        <div>
           <div className='text-center'>
           check out  : {title} ===
            {_id}
           </div>
            <div className="max-w-md mx-auto mt-20 ">
                <form onSubmit={handleBookService}
                 className="bg-gradient-to-tr from-amber-200  to-green-400 shadow-lg hover:shadow-fuchsia-400 rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="first-name">
                            Your Name
                        </label>
                        <input
                            className="shadow appearance-none bbooking rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='name'
                            id="first-name"
                            type="text"
                            placeholder="First Name" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="last-name">
                            Date
                        </label>
                        <input
                            className="shadow appearance-none bbooking rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='date'
                            id="last-name"
                            type="date"
                            placeholder="Date" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                            Phone Number
                        </label>
                        <input
                            className="shadow appearance-none bbooking rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='phoneNo'
                            id="phone"
                            type="tel"
                            placeholder="Phone Number" required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none bbooking rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='email'
                            id="email"
                            type="email"
                            placeholder={user?.email} required/>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                            due amount
                        </label>
                        <input
                            className="shadow appearance-none bbooking rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            name='due'
                            id="text"
                            type="text"
                            placeholder="due amount" 
                            defaultValue={'$' + price}
                            required/>
                    </div>
                  
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-gradient-to-tr from-cyan-200 to-green-400  w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit" >
                            Confirm booking
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default CheckOut;