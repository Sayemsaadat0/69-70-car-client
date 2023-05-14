import React from 'react';

const BookingRow = ({ booking , handleDelete,handleConfirm}) => {

    const {_id, customerName, email, date, price, service_id, service, img, status } = booking


    return (
        <div>
            <tr>
                <th>
                    <button 
                    onClick={()=> handleDelete(_id)}
                    className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{service}</div>

                            <div className="text-sm opacity-50">{service_id}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <span className="badge badge-ghost badge-sm">{customerName}</span>
                    <br />
                    <span className="badge badge-ghost badge-sm">{email}</span>
                </td>
                <td>{price}</td>
                <td>{date}</td>
                <th>
                 {
                    status === 'confirm' ? <span>
                        confirmed 
                    </span> :    <button 
                    onClick={()=>handleConfirm(_id)}
                    className="btn btn-ghost btn-xs">comfirm</button>
                 }
                </th>
            </tr>
        </div>
    );
};

export default BookingRow;