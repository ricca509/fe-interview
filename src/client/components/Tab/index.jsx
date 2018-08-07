import React from 'react';
import classNames from 'classnames';

const Tab = ({ title, tabIndex, onClick, isSelected = false }) => {
  const onTabClick = event => {
    event.preventDefault();
    onClick(tabIndex);
  };

  const classes = classNames({
    tab: true,
    'tab-selected': isSelected
  });

  return (
    <li className={classes}>
      <a href="#" onClick={onTabClick}>
        {title}
      </a>
    </li>
  );
};

export default Tab;