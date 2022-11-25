import React, { useContext } from 'react';
import './switch.css';
import { SwitchContext } from '../../contexts/SwitchContext';

function Switch() {
  const { darkMode, setDarkMode, myStorage } = useContext(SwitchContext);
  return (
    <div className='switch'>
      <input
        onChange={() => {
          setDarkMode(!darkMode);
          myStorage.setItem('darkMode', !darkMode);
        }}
        checked={darkMode}
        type='checkbox'
        id='toggle_checkbox'
      />

      <label htmlFor='toggle_checkbox'>
        <div id='star'>
          <div className='star' id='star-1'>
            ★
          </div>
          <div className='star' id='star-2'>
            ★
          </div>
        </div>
        <div id='moon'></div>
      </label>
    </div>
  );
}

export default Switch;
