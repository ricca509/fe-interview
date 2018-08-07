import React from 'react';
import Tab from '../';
import { shallow } from 'enzyme';

describe('Tab component', ()=> {
  it('should render a list element with the right title', () => {
    const props = {
      title: 'Tab1',
      tabIndex: 0,
      onClick: ()=>({}),
      isSelected: true
    };

    const wrapper = shallow(<Tab {...props}>content</Tab>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with right props when `isSelected`', () => {
    const props = {
      title: 'Tab1',
      tabIndex: 0,
      onClick: ()=>({}),
      isSelected: true
    };

    const wrapper = shallow(<Tab {...props}>content</Tab>);

    expect(wrapper.find('li').prop('className')).toEqual('tab tab-selected');
  });

  it('should call the `onClick` handler correctly when clicked', () => {
    const props = {
      title: 'Tab1',
      tabIndex: 0,
      onClick: jest.fn(),
      isSelected: true
    };
    const preventDefaultMock = jest.fn();

    const wrapper = shallow(<Tab {...props}>content</Tab>);
    wrapper.find('a').simulate('click', {
      preventDefault: preventDefaultMock
    });

    expect(props.onClick).toHaveBeenCalledWith(0);
    expect(preventDefaultMock).toHaveBeenCalled();
  });
});