import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Donor from './Donor';

const Donors = () => {
    const [categories, setCategories] = useState([]);
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/donors`)
            .then(res => res.json())
            .then(data =>{
               setDonors(data);
               setCategories(data);
            } )
    }, [])

    const filterResult = (bloodGroup) => {
        const result = donors.filter(currentData => {
            return currentData.bgrp === bloodGroup;
        });
        setCategories(result);
        // console.log(result)
    }

const handleSearch = e =>{
        const searchText = e.target.value;
        const result = donors.filter(donor=>donor.bgrp.toLowerCase().includes(searchText.toLowerCase()));
        setCategories(result);
}
    return (
        <div>
              <div className="text-center pt-2"> 
                        <h2 className="fw-bold text-primary p-2">Donors</h2>
                        <input placeholder='Search blood group' className='custom-input w-50' type="text" onChange={handleSearch} />
                    </div>
                    <div className='text-center d-block'>
                        <button onClick={() => filterResult('A+')} className='btn btn-custom-2 mx-2'>A+</button>
                        <button onClick={() => filterResult('A-')} className='btn btn-custom-2 mx-2'>A-</button>
                        <button onClick={() => filterResult('B+')} className='btn btn-custom-2 mx-2'>B+</button>
                        <button onClick={() => filterResult('B-')} className='btn btn-custom-2 mx-2'>B-</button>
                        <button onClick={() => filterResult('AB+')} className='btn btn-custom-2 mx-2'>AB+</button>
                        <button onClick={() => filterResult('AB-')} className='btn btn-custom-2 mx-2'>AB-</button>
                        <button onClick={() => filterResult('O+')} className='btn btn-custom-2 mx-2'>O+</button>
                        <button onClick={() => filterResult('O-')} className='btn btn-custom-2 mx-2'>O-</button>
                        <button onClick={() => setCategories(donors)} className='btn btn-custom-2 mx-2'>All</button>

                    </div>
            <div className="row row-cols-1 row-cols-md-3 m-2 g-4">
                {
                    categories.length === 0 ?
                    <div className="w-100 text-center">
                        <CircularProgress />
                    </div>
                    :
                    categories.map(donor=> <Donor
                    key={donor._id}
                    donor={donor}
                    >
                    </Donor> )
                }
            </div>
        </div>
    );
};

export default Donors;