import React, { useState } from 'react';
import supabase from './supabaseClient';

const AddDentistForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [services, setServices] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from('dentists')
      .insert([{ name, address, services, profile_image: profileImage }]);
    if (error) console.error(error);
    else console.log('Dentist added:', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Services"
        value={services}
        onChange={(e) => setServices(e.target.value)}
      />
      <input
        type="text"
        placeholder="Profile Image URL"
        value={profileImage}
        onChange={(e) => setProfileImage(e.target.value)}
      />
      <button type="submit">Add Dentist</button>
    </form>
  );
};

export default AddDentistForm;