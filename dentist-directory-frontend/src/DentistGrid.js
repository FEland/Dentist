import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient';
import DentistCard from './DentistCard';

const DentistGrid = () => {
  const [dentists, setDentists] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchDentists = async () => {
      const { data } = await supabase
        .from('Dentists1')
        .select('*');
      setDentists(data);
    };

    fetchDentists();
  }, []);

  const filteredDentists = dentists.filter(dentist =>
    dentist.Name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a dentist"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="dentist-grid">
        {filteredDentists.map(dentist => (
          <DentistCard key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </div>
  );
};

export default DentistGrid;