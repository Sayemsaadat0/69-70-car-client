import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/Fi';

const ServiceCard = ({service}) => {

    const {_id, img ,price , title , description} = service
    return (
        <div className='mx-auto'>
            <div className="card card-compact w-60 bg-base-100 shadow-xl">
                <img src={img} alt="" />
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p>$ {price}</p>
                    <Link className='hover:bg-slate-300  justify-end w-[50%]' to={`/checkout/${_id}`}>
                    <button className='flex items-center gap-2'>
                        book now <FiArrowRight className='text-red-600'></FiArrowRight>
                    </button>
                    </Link>
                </div>
                <div>
                   
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;