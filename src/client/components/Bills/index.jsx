import React from 'react';
import PropTypes from 'prop-types';
import Bill from '../Bill';

const Bills = ({ bills = [], onActionClicked }) => {
  return (
    <ul>
      {bills.map(bill => (
        <Bill
          {...bill}
          key={bill.id}
          onActionClicked={onActionClicked}
        />
      ))}
    </ul>
  );
};

Bills.propTypes = {
  bills: PropTypes.array,
  onActionClicked: PropTypes.func
};

export default Bills;