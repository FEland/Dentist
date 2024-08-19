import React from 'react';
import DentistGrid from './DentistGrid';
import AddDentistForm from './AddDentistForm';
import './App.css';  // Ensure you have some basic styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dentist Directory</h1>
      </header>
      <main>
        <AddDentistForm />
        <DentistGrid />
      </main>
    </div>
  );
}

export default App;