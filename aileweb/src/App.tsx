import React from 'react';
import './App.css'
import List from './components/List';

const App: React.FC = () => {
    const people = ['Alex', 'Jamie', 'Taylor'];

  return (
    <div>
      <h1>🧑 Name List</h1>
      <List names={people} />
    </div>
  );
};
export default App;
