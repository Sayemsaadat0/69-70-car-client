import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
     useEffect(()=>{
        fetch('http://localhost:7979/services')
        .then(res => res.json())
        .then(data => setServices(data))
     },[])
    return (
        <div className='mb-20'>
            services {services.length}

          <div className='md:grid md:grid-cols-3 gap-10 items-center '>
          {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
          </div>
        </div>
    );
};

export default Services;