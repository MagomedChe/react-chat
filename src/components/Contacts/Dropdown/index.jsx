import React from 'react';

function Dropdown({ setDropdown, dropdown }) {
  const handleContactDelete = () => {
      setDropdown(false);
  };

  return (
    <div className="dropdownMenu">
      <div onClick={handleContactDelete}>
        Delete
      </div>
      <div>Archive</div>
    </div>
  );
}

export default Dropdown;
