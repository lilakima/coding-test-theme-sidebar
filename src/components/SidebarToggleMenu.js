import React, { useState } from 'react';
import '../SidebarToggleMenu.css';
import { Bars3Icon, XMarkIcon, HomeIcon, InformationCircleIcon, PencilIcon } from '@heroicons/react/24/outline';

const SidebarToggleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="flex items-center justify-between p-2">
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <Bars3Icon className="h-5 w-5 text-white" />
        </button>
      </nav>
      <div className={`sidebar ${isOpen ? 'open' : ''} bg-gray-800`}>
        <button
          className="focus:outline-none"
          onClick={toggleMenu}
        >
          <XMarkIcon className="h-5 w-5 text-white" />
        </button>
        <ul className="flex flex-col">
          <li><a href="#home" className='flex items-center justify-center'><HomeIcon className="h-5 w-5 ml-2" /><span>Home</span></a></li>
          <li><a href="#about" className='flex items-center justify-center'><InformationCircleIcon className="h-5 w-5 ml-2"/><span>About</span></a></li>
          <li><a href="#post1"className='flex items-center justify-center'><PencilIcon className="h-5 w-5 ml-2" /><span>Post 1</span></a></li>
          <li><a href="#post2"className='flex items-center justify-center'><PencilIcon className="h-5 w-5 ml-2" /><span>Post 2</span></a></li>
          <li><a href="#post3"className='flex items-center justify-center'><PencilIcon className="h-5 w-5 ml-2" /><span>Post 3</span></a></li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarToggleMenu;