import React from 'react';
import App from '../';
import { shallow } from 'enzyme';
import nock from 'nock';
import { fetchBills } from '../../../state/App/module';

jest.mock('../../../state/App/module')

describe('App component', ()=> {
  beforeEach(() => {
    fetchBills.mockImplementation(() => Promise.resolve({ bills: 'abc' }));
  });

  describe('when loading', ()=> {
    it('should render loading component', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        bills: [],
        loading: true,
        error: undefined
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when in error', ()=> {
    it('should render error component', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        bills: [],
        loading: false,
        error: 'Not found'
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('when succesfully fetched the bills', ()=> {
    it('should render bills', () => {
      const wrapper = shallow(<App />);
      wrapper.setState({
        bills: [
          {
            "name": "Vodafone",
            "isBill": false,
            "transactions": [
              {
                "amount": 12.34,
                "date": "2017-01-13"
              }
            ],
            "id": "5a5caa1efe33900100fd8ed5"
          },
        ],
        loading: false,
        error: undefined
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});