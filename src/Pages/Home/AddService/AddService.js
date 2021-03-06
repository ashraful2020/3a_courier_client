import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddService = () => {

  const { register, handleSubmit,reset } = useForm();
  const onSubmit = data => {
    axios.post('https://young-fjord-77077.herokuapp.com/service', data)
      .then(res => {
        reset();
      if (res.data.insertedId) {
        alert('Added Successfully ')
      }
    })
  };
  return (
    <div className='add-services'>
      <h1>Please add a service </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder='Enter Your Service Name' {...register("Name", { required: true })} />
        <input placeholder='Enter Service Details' {...register("details")} />
        <input placeholder='Enter Service price' type="number" {...register("price")} />
        <input placeholder='Enter Image URL ' {...register("img")} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;