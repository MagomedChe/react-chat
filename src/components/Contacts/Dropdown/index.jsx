import React from 'react';

function Dropdown({ setDropdown, dropdown }) {
  const handleContactDelete = () => {
      setDropdown(false);
    alert('Кнопка удаления');
  };

  return (
    <div className="dropdownMenu">
      <div className="del" onClick={handleContactDelete}>
        Delete
      </div>
      <div className="del">Archive</div>
    </div>
  );
}

export default Dropdown;
