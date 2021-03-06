import React from 'react';
import Bill from '../';
import { shallow } from 'enzyme';

describe('Bill component', ()=> {
  const props = {
    name: 'Vodafone',
    isBill: false,
    transactions: [
      {
        amount: 12.34,
        date: '2017-01-13'
      },
      {
        amount: 14.34,
        date: '2017-02-13'
      }
    ],
    id: '5a5caa1efe33900100fd8ed5'
  };

  it('should render a list element with the bill name and a button with the right action', () => {
    const wrapper = shallow(<Bill {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should show `Transactions` when clicked', () => {
    const wrapper = shallow(<Bill {...props} />);
    wrapper.find('span').simulate('click');

    expect(wrapper.find('Transactions')).toMatchSnapshot();
  });

  it('should call the callback with the transaction id when the button is clicked', () => {
    const ownProps = {
      ...props,
      onActionClicked: jest.fn()
    };

    const wrapper = shallow(<Bill {...ownProps} />);
    wrapper.find('button').simulate('click');

    expect(ownProps.onActionClicked).toHaveBeenCalledWith('5a5caa1efe33900100fd8ed5');
  });
});