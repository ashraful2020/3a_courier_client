import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://young-fjord-77077.herokuapp.com/service')
      .then(res => res.json())
      .then(data => setServices(data))
  },[])
  return (
    <>
    <h1>All of our services </h1>
    <div className='service-container container py-5'>
      {
        services?.map(service =>
      
          <Card>
          <Card.Img variant="top" src={service.img} className='service-img' alt='service-images' />
          <Card.Body>
            <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.details}</Card.Text>

              <Button variant="primary"
              as={Link}
                className=' text-white py-2 mx-5'
                to={`/services/${service._id}`
                  
                }>Book Now</Button>
          </Card.Body>
          </Card>
        
        )
      }
    </div>
    </>
  );
};

export default Services;