// import { Box } from '@mui/material';
import React from 'react';
import "./Donor.css"

const Donor = ({donor}) => {
    const {name,bgrp,lastDonate,gender,area,image}=donor;
    return (
        <div className="col rounded">
                <div className="card card-hover bg-light shadow border-0 h-100">
                    <div className='row p-3 g-0'>
                    <div className='col-md-4 p-3 text-center'>
                            <img style={{ width:"10rem" }} src={image} className="img-fluid" alt="" />
                           
                        </div>
                        <div className='col-md-8'>
                            <div className='text-danger fw-bold text-center pt-3'>
                            <h1 className="shadow rounded">{bgrp}</h1>
                            </div>
                            <div>
                                <h4>{name}</h4>
                                <h4>Area: {area}</h4>
                                <h5>{gender}</h5> 
                                <p className="text-danger fw-bold">Last Donate : {lastDonate}</p>
                            </div>
                            
                            {/* <Box sx={{
                                '& > legend': { mt: 2 },
                            }}>
                                <Rating name="half-rating-read" precision={0.5} size="small" value={Number(star)} readOnly />
                            </Box> */}
                            {/* <div style={{ textAlign: "justify" }} className="p-2">
                                <p className="text-secondary">{specs}</p>
                            </div> */}

                        </div>
                        
                    </div>
                    <div className="px-4 d-flex justify-content-between">
                        {/* <Link to={`/mobile/${_id}`}><button className="btn btn-custom-2">OVERVIEW</button></Link>
                        <Link to={`/mobile2/${_id}`}><button className="btn btn-custom">BUY NOW</button></Link> */}
                        <button className='btn btn-custom'>Request Donor</button>
                        <button className='btn btn-custom-2'>Donor Details</button>
                    </div>
                </div>
            </div>
    );
};

export default Donor;