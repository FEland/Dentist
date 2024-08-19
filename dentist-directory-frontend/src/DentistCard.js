import React from 'react';

const DentistCard = ({ dentist }) => (
  <div className="dentist-card">
    {/* <img src={dentist.profile_image} alt={dentist.name} /> */}
    <h2>{dentist.Name}</h2>
    <p>{dentist.Website}</p>
    <p>{dentist.County}</p>
  </div>
);

export default DentistCard;