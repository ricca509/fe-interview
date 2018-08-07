import React from 'react';
import PropTypes from 'prop-types';
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

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  tabIndex: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool
};

export default Tab;