import React from 'react';
import PropTypes from 'prop-types';

const Transactions = ({ transactions = [] }) => {
  return (
    <div className="transactions">
      {transactions.length} transactions
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;