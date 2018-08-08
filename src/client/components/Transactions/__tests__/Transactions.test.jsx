import React from 'react';
import Transactions from '../';
import { shallow } from 'enzyme';

describe('Transactions component', ()=> {
  it('should render the count of trasactions', () => {
    const props = {
      transactions: [
        {
          amount: 12.34,
          date: '2017-01-13'
        },
        {
          amount: 14.34,
          date: '2017-02-13'
        },
        {
          amount: 15.54,
          date: '2017-03-13'
        },
        {
          amount: 11.34,
          date: '2017-04-13'
        },
        {
          amount: 18.99,
          date: '2017-05-13'
        }
      ],
    };

    const wrapper = shallow(<Transactions {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.text()).toEqual('5 transactions');
  });
});