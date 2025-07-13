import React from 'react'
import { useState } from 'react'
import { USER_API_ENDPOINT } from '../../utils/apiendpoint';
import axios from 'axios';
import { setUser } from '../redux/authSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Signup() {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
    })

    

    let changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    let submitHandler = async(e) => {
        e.preventDefault();
        
        try {
            let res = await axios.post(`${USER_API_ENDPOINT}/signup`, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            if (res.data.success) {
                toast.success("Registration is successfull!")
                dispatch(setUser(res.data.user.name));
                navigate("/");
                setInput({
                    email: "",
                    password: "",
                    name : ""
                });
            }

        }
        catch (e) {
            if(e?.response?.data?.message){
                toast.error(e.response.data.message);
            }
            else toast.error("Internal Server Error!")
        }
    }

    return (
        <div className="container mt-5" style={{ maxWidth: '500px' }}>
            <div className="card shadow-lg rounded-4">
                <div className="card-body">
                    <h3 className="card-title mb-4 text-center">Sign Up</h3>
                    <form className='px-3 pb-2' onSubmit={submitHandler}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={input.name} onChange={changeEventHandler} placeholder="Enter your name" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={input.email} onChange={changeEventHandler} placeholder="Enter your email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={input.password} onChange={changeEventHandler} placeholder="Enter your password" />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Sign Up</button>

                        <p className='mt-3'>Already have an account <Link to="/signin">Sign in</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
