import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth/useAuth';

const BloodRequests = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const date = new Date().toLocaleDateString();
    const time = new Date().getTime().toLocaleString();

    const onSubmit = data => {
        // console.log(data);

        axios.post(`http://localhost:5000/requests`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                    window.location.reload();
                }
            })
    }
    return (
        <div>
             <div className=''>
           </div>
             <div className="p-4">
                <div className="shadow p-4 bg-custom rounded">
                    <form className='custom-form' onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                      <div className="col-sm-12 col-md-6">
                        <h4>Personal Information</h4>
                        <div>
                            {
                                user && <div>
                                    <input className=" rounded" hidden defaultValue={user?.displayName} {...register("name")} />
                        <input className=" rounded" hidden defaultValue={user?.email} {...register("email")} />
                        <input className=" rounded" hidden defaultValue={user?.photoURL} {...register("image")} />
                                </div>
                            }
                        </div>
                        <input className=" rounded"  {...register("fullName")} placeholder='Your Full Name' />
                        <input className=" rounded"  {...register("patientName")} placeholder='Your Patient Name' />
                        <input className=" rounded"  {...register("disease")} placeholder='Name of the patients disease' />
                        <input className=" rounded" type="number" {...register("contact")} placeholder='Enter your contact number' required />
                        {errors.contact && <span className="text-warning">This field is required.</span>}
                        </div>

                        <div className="col-sm-12 col-md-6">
                            <h4>Blood Information</h4>
                        <input className=" rounded"  {...register("bloodGroup")} placeholder='Blood Group' />
                     
                        <input className=" rounded" type="number" min='1' {...register("bloodBag",{ required: true })} placeholder="How many bag do you need?" />
                        {errors.bloodBag && <span className="text-warning">This field is required.</span>}
                        <input defaultValue={date} type="date"  {...register("date", { required: true })} />
                        {errors.date && <span className="text-warning">This field is required.</span>}
                        <input defaultValue={time} type="time"  {...register("time", { required: true })} />
                        {errors.time && <span className="text-warning">This field is required.</span>}
                        <select {...register("area", { required: true })}>
                        <option>Select Area</option>
                        <option value="Cumilla">Cumilla</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chattogram">Chattogram</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Barishal">Barishal</option>
                        <option value="Mymansingh">Mymansingh</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Rajshahi">Rajshahi</option>
                        </select>
                        {errors.area && <span className="text-warning">This field is required.</span>}
                        <input className="rounded" {...register("hospital")} placeholder="Hospital name" />
                        {errors.hospital && <span className="text-warning">This field is required.</span>}
                        <textarea className="rounded" {...register("description")} placeholder="Description" />
                        </div>
                        
                      </div>
                      
                        <Button sx={{ width: "100%", letterSpacing: 4 }} type="submit" variant="contained">Submit</Button>
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default BloodRequests;