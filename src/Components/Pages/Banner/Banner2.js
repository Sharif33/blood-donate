import React from 'react';
import blood from '../../images/donationFact.webp';

const Banner2 = () => {
    return (
        <div className='my-3 overflow-hidden'>
           <div className="text-center pb-5">
               <h3>Learn About Donation</h3>
           </div>
           <div className="row row-cols-1 row-cols-md-2">
                <div className="col text-center p-3">
                    <img className='img-fluid' src={blood} alt="" />
                    <p>After donating blood, the body works to replenish the blood loss. This stimulates the production of new blood cells and in turn, helps in maintaining good health.</p>
                    <button className="btn btn-danger text-center">Donate Now</button>
                </div>
                <div className="col">
                    <div>
                        <h5 className='bg-danger p-2 text-white'>Compatible Blood Type Donors</h5>
                    <table className="table">
  <thead>
    <tr>
      <th scope="col">Blood Type</th>
      <th scope="col">Donate Blood To</th>
      <th scope="col">Donate Blood From</th>
    </tr>
  </thead>
  <tbody>
    <tr> 
      <td>A+</td>
      <td>A+ AB+</td>
      <td>A+ A- O+ O-</td>
    </tr>
    <tr> 
      <td>O+</td>
      <td>O+ A+ B+ AB+</td>
      <td>O+ O-</td>
    </tr>
    <tr> 
      <td>B+</td>
      <td>B+ AB+</td>
      <td>B+ B- O+ O-</td>
    </tr>
    <tr> 
      <td>AB+</td>
      <td>AB+</td>
      <td>Everyone</td>
    </tr>
    <tr> 
      <td>A-</td>
      <td>A+ A- AB+ AB-</td>
      <td>A- O-</td>
    </tr>
    <tr> 
      <td>O-</td>
      <td>Everyone</td>
      <td>O-</td>
    </tr>
    <tr> 
      <td>B-</td>
      <td>B+ B- AB+ AB-</td>
      <td>B- O-</td>
    </tr>
    <tr> 
      <td>AB-</td>
      <td>AB+ AB-</td>
      <td>AB- A- B- O-</td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;