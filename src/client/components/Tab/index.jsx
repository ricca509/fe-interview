import React from 'react';

const Tab = ({ title, tabIndex, onClick, isSelected = false }) => {
  const onTabClick = event => {
    event.preventDefault();
    onClick(tabIndex);
  };

  return (
    <li className="tab">
      <a href="#" onClick={onTabClick}>
        {title}
      </a>
    </li>
  );
};

export default Tab;