import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card,Button } from 'react-bootstrap';

const ManageOrder = () => {
  const [singleOrder, setSingleOrder] = useState([]);
  const handleRemove = id => {
    const url = `https://courier-8bde7.web.app/orders/${id}`
    fetch(url, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        window.confirm("R U SURE ")
        setSingleOrder(data)
      })
  }
  const handleStatus = (data) => {
    // data.status = 'Approved';
    // axios.post('https://young-fjord-77077.herokuapp.com/order', data)
    //   .then(res => res.json())
  }
  useEffect(() => {
    fetch('https://young-fjord-77077.herokuapp.com/order')
      .then(res => res.json())
      .then(data => setSingleOrder(data))
  }, [])
  return (
    <>
      <h1>Manage All Order </h1>
      {
        singleOrder?.map(order =>
          <div
            key={order._id}
            className='m-0 p-0 row'>
            
          <div className="order-bg container row mx-auto my-5 py-5 rounded">
          <div className="col-md-4 col-lg-4 m-0 ">
          <img src={order.serviceOrder.img} alt='img' />
          <Card.Body>
              <Card.Text> <b> Details : </b> {order.serviceOrder.details}</Card.Text>
          </Card.Body>
            </div>
            <div className="col-md-4 col-lg-4">
            <h2> Name : {order.Name} </h2>
            <h4> Email : {order.email} </h4>
            <h6> Phone : {order.Phone} </h6>
            <p> Address : {order.address} </p>
            </div>
            <div className="col-md-4 col-lg-4">
              <h5>Status : {order.status} </h5>
                <Button className='me-5 mt-3 bg-danger' onClick={() => handleRemove(order._id)} >Remove</Button>
              <Button className='ms-5 mt-3' onClick={handleStatus} >Approved</Button>
            </div>
          </div>  
        </div>)
      }
    </>
  );
};

export default ManageOrder;