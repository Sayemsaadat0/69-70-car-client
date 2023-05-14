import React, { useContext, useEffect, useState } from 'react';
import { AuthConext } from '../Provider/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthConext)
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:7979/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
            })
    }, [url])
   
   
   
   
   
    const handleDelete = id =>{
        const proced = confirm('are you sure are uou tot to')
        if(proced){
            fetch(`http://localhost:7979/bookings/${id}`, {
                method : 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('fuckoff')
                    const remaiining = bookings.filter(b =>b._id !== id )
                    setBookings(remaiining)
                }
            })
    
        }
     }




     const handleConfirm = id =>{
        fetch(`http://localhost:7979/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status : 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if (data.modifiedCount > 0){
                const remaining = bookings.filter(b => b._id !== id )
                const updated = bookings.find(b => b._id === id)
                updated.status = 'confirm'
                const newbookings =  [updated, ...remaining];

                setBookings(newbookings)
            }
        })
     }
    return (
        <div>
            booking {bookings.length}
            <div className="overflow-x-auto w-full">
                <table className="table ">
                    {/* head */}
                   {/*  <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead> */}
                    <tbody className='w-full'>
                      {
                        bookings.map(booking=> <BookingRow key={booking._id} booking={booking}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                        ></BookingRow>)
                      }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;