import React from 'react';
import Tab from '../';
import { shallow } from 'enzyme';

describe('Tab component', ()=> {
  const props = {
    title: 'Tab1',
    tabIndex: 0,
    onClick: ()=>({}),
    isSelected: true
  };

  it('should render a list element with the right title', () => {
    const wrapper = shallow(<Tab {...props}>content</Tab>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with right props when `isSelected`', () => {
    const wrapper = shallow(<Tab {...props}>content</Tab>);

    expect(wrapper.find('li').prop('className')).toEqual('tab tab-selected');
  });

  it('should call the `onClick` handler correctly when clicked', () => {
    const ownProps = {
      ...props,
      onClick: jest.fn(),
    };
    const preventDefaultMock = jest.fn();

    const wrapper = shallow(<Tab {...ownProps}>content</Tab>);
    wrapper.find('a').simulate('click', {
      preventDefault: preventDefaultMock
    });

    expect(ownProps.onClick).toHaveBeenCalledWith(0);
    expect(preventDefaultMock).toHaveBeenCalled();
  });
});