import React from 'react';
import Tabs from '../';
import Tab from '../../Tab';
import { shallow } from 'enzyme';

describe('Tabs component', ()=> {
  it('should render a list of `Tab` with the right props and one selected content', () => {
    const wrapper = shallow(
      <Tabs>
        <Tab title="Tab1">
          <div>content1</div>
        </Tab>
        <Tab title="Tab2">
          <div>content2</div>
        </Tab>
      </Tabs>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the right selected content when a `Tab` is clicked', () => {
    const newlySelectedTabIndex = 1;
    const wrapper = shallow(
      <Tabs>
        <Tab title="Tab1">
          <div>content1</div>
        </Tab>
        <Tab title="Tab2">
          <div>content2</div>
        </Tab>
      </Tabs>
    );

    wrapper.find('Tab').at(1).simulate('click', newlySelectedTabIndex);

    expect(wrapper).toMatchSnapshot();
  });
});