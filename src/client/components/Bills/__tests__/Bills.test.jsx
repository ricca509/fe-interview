import React from 'react';
import Bills from '../';
import { shallow } from 'enzyme';

describe('Bill component', ()=> {
  const props = {
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
      {
        "name": "Sky TV",
        "isBill": true,
        "transactions": [
          {
            "amount": 82.17,
            "date": "2017-01-01"
          }
        ],
        "id": "5a5caa8efe33900100fd8ed6"
      },
    ]
  };

  it('should render a list of `Bill`', () => {
    const wrapper = shallow(<Bills {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should pass the right callback to every `Bill`', () => {
    const onActionClickedMock = jest.fn();
    const ownProps = {
      ...props,
      onActionClicked: onActionClickedMock
    };
    const wrapper = shallow(<Bills {...ownProps} />);

    expect(wrapper.find('Bill').at(0).prop('onActionClicked')).toBe(onActionClickedMock);
    expect(wrapper.find('Bill').at(1).prop('onActionClicked')).toBe(onActionClickedMock);
  });
});