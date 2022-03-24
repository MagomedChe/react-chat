import React from 'react';
import style from '../../Messages/style.module.css'

function Dropdown({ setDropdown, dropdown }) {
  const handleContactDelete = () => {
    setDropdown(false);
  };

  return (
    <div className={style.dropdownMenu}>
      <div onClick={handleContactDelete}>Delete</div>
      <div>Archive</div>
    </div>
  );
}

export default Dropdown;
