import React, { useState } from 'react';
import SidebarToggleMenu from './components/SidebarToggleMenu';
import Slider from './components/Slider';
import GridTable from './components/GridTable';
import { sliderButtons, gridItems } from './dummyData';
import './App.css';

const App = () => {
  const [mode, setMode] = useState('dark'); 

  const toggleMode = (newMode) => {
    setMode(newMode);
  };

  return (
    <div className={`App ${mode === 'dark' ? 'bg-black' : 'bg-primary'} text-white h-screen`}>
      <nav className="flex items-center justify-between bg-green-900">
        <div className="text-white mx-auto">Change Color</div>
        <div className="flex space-x-2">
          <button className="bg-dark text-white px-4 py-2 rounded" onClick={() => toggleMode('dark')}>Dark</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => toggleMode('primary')}>Primary</button>
        </div>
      </nav>
      <SidebarToggleMenu />
      <div className="bg-gray-900 pb-5">
        <Slider sliderButtons={sliderButtons} mode={mode} />
        <GridTable items={gridItems} />
      </div>
    </div>
  );
};

export default App;
