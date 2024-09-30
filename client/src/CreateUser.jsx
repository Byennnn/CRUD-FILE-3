import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateUser () {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {name, email,age})
        .then(result => {
            console.log(result)
            navigate('/Warehouse')

        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <form onSubmit={Submit}>
                    <h2>Add Product</h2>
                    <div className='mb=2'>
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Enter the Product Name' className='form-control' 
                        onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='mb=2'>
                        <label htmlFor="">Received From</label>
                        <input type="text" placeholder='Enter the Store/Company' className='form-control'
                        onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mb=2'>
                        <label htmlFor="">Quantity</label>
                        <input type="text" placeholder='Enter the Quantity' className='form-control'
                        onChange={(e) => setAge(e.target.value)} />
                    </div>
                    <br></br>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>    
    )
}

export default CreateUser;