import React from 'react'
import './yupForm.css'
import * as yup from 'yup'; //valitadion library
import { useForm } from 'react-hook-form';
// import {yupnpm i }
import { yupResolver } from '@hookform/resolvers/yup/src/yup.js';

//defining the validation schema
const Schema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().email('invalid email').required('email is required'),
    age: yup.number().positive().integer().required('age is required')
})

const YupForm = () => {

    const {register, handleSubmit,formState:{errors},reset} = useForm({resolver:yupResolver(Schema) });

    const onSubmit = (data) => {
        console.log(data);
        reset();
        
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <input {...register("name")} placeholder='Name' />
            <p>{errors.name?.message}</p>

            <input {...register("email")} placeholder='Email' />
            <p>{errors.email?.message}</p>

            <input {...register("age")} placeholder='Age' />
            <p>{errors.age?.message}</p>

           <div>
             <button type='submit'>submit</button>
            <button type='reset' onClick={() => reset()}>Reset</button>

           </div>
        </form>
    )
}

export default YupForm
