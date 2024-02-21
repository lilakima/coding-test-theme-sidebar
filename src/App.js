import React, { useState } from 'react';
import SidebarToggleMenu from './components/SidebarToggleMenu';
import Slider from './components/Slider';
import GridTable from './components/GridTable';
import './App.css';

const gridItems = [
  { id: 'A', label: 'A' },
  { id: 'B', label: 'B' },
  { id: 'C', label: 'C' },
  { id: 'D', label: 'D' },
  { id: 'E', label: 'E' },
  { id: 'F', label: 'F' },
  { id: 'G', label: 'G' },
  { id: 'H', label: 'H' },
  { id: 'I', label: 'I' },
  { id: 'J', label: 'J' },
]

const sliderButtons = [
  { id: 1, label: "MagnifyingGlassIcon", special: true },
  { id: 2, label: "ALL", special: true },
  { id: 3, label: "TYPE1", special: false },
  { id: 4, label: "TYPE2", special: false },
  { id: 5, label: "TYPE3", special: false },
  { id: 6, label: "TYPE4", special: false },
];

const ColorToggleButton = ({ mode, toggleMode, color, label }) => (
  <button className={`bg-${color} text-white px-4 py-2 rounded`} onClick={() => toggleMode(color)}>
    {label}
  </button>
);

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
          <ColorToggleButton mode={mode} toggleMode={toggleMode} color="dark" label="Dark" />
          <ColorToggleButton mode={mode} toggleMode={toggleMode} color="primary" label="Primary" />
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
