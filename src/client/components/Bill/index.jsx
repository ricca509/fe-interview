import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transactions from '../Transactions';

class Bill extends Component {
  constructor() {
    super();

    this.state = {
      expanded: false
    };

    this.onNameClicked = this.onNameClicked.bind(this);
  }

  onNameClicked() {
    this.setState(() => ({ expanded: !this.state.expanded }));
  }

  render() {
    const { name, id, transactions, isBill, onActionClicked } = this.props;
    const { expanded } = this.state;
    const buttonCopy = isBill ? 'Remove bill' : 'Add as bill';
    const onBillSelected = evt => onActionClicked(id);

    return (
      <li className="bill">
        <span onClick={this.onNameClicked}>{name}</span>
        <button className="bill-action" onClick={onBillSelected}>
          {buttonCopy}
        </button>
        { expanded && <Transactions transactions={transactions} />}
      </li>
    );
  }
};

Bill.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  transactions: PropTypes.array,
  isBill: PropTypes.bool,
  onSelected: PropTypes.func
};

export default Bill;