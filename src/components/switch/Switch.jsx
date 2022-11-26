import React, { useContext } from 'react';
import './switch.css';
import { SwitchContext } from '../../contexts/SwitchContext';

function Switch() {
  const { darkMode, setDarkMode, myStorage } = useContext(SwitchContext);
  return (
    <div className='wrapper'>
      <input
        onChange={() => {
          setDarkMode(!darkMode);
          myStorage.setItem('darkMode', !darkMode);
        }}
        checked={!darkMode}
        type='checkbox'
        name='checkbox'
        className='switch'
      />
    </div>
  );
}

export default Switch;
