import React from 'react';

const DentistCard = ({ dentist }) => (
  <div className="dentist-card">
    {/* <img src={dentist.profile_image} alt={dentist.name} /> */}
    <h2>{dentist.Name}</h2>
    <p>{dentist.Phone_number}</p>
    <p>{dentist.Address_1}</p>
    <p>{dentist.Address_2}</p>
    <p>{dentist.County}</p>
    <p>{dentist.Postcode}</p>
    <p>{dentist.Website}</p>


  </div>
);

export default DentistCard;