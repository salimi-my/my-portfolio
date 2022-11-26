import React, { useContext } from 'react';
import './switch.css';
import { SwitchContext } from '../../contexts/SwitchContext';
import ReactTooltip from 'react-tooltip';

function Switch() {
  const { darkMode, setDarkMode, myStorage } = useContext(SwitchContext);
  return (
    <>
      <div data-tip data-for='modebtn' className='wrapper'>
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
      <ReactTooltip
        id='modebtn'
        place='left'
        type='dark'
        effect='solid'
        className='tooltip-mode'
        // backgroundColor='rgba(0, 0, 0, 0.3)'
        // arrowColor='rgba(0, 0, 0, 0)'
      >
        Switch Theme
      </ReactTooltip>
    </>
  );
}

export default Switch;
