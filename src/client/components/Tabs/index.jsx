import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from '../Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTabIdx: this.props.preSelectedTabIndex || 0
    };

    this.onTabSelect = this.onTabSelect.bind(this);
  }

  onTabSelect(selectedTabIdx) {
    this.setState(() => ({
      selectedTabIdx
    }));
  }

  renderTabHeaders() {
    const { children } = this.props;
    const { selectedTabIdx } = this.state;

    return React.Children
      .toArray(children)
      .map((tab, idx) => {
        return React.cloneElement(tab, {
          tabIndex: idx,
          isSelected: selectedTabIdx === idx,
          onClick: this.onTabSelect
        });
      });
  }

  renderTabContent() {
    const { children } = this.props;
    const { selectedTabIdx } = this.state;

    return React.Children
      .toArray(children)
      .filter((tab, idx) => selectedTabIdx === idx)
      .map(tab => tab.props.children)
  }

  render() {
    const { children } = this.props;
    return (
      <div className="tabs">
        <ul>
          {this.renderTabHeaders()}
        </ul>
        <div className="tab-content">
          {this.renderTabContent()}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  preSelectedTabIndex: PropTypes.number
};

export default Tabs;