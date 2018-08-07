import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
class App extends React.Component {
  render () {
    return (
      <Tabs>
        <Tab title="Bills">
          <div>Bills content</div>
        </Tab>
        <Tab title="Potential bills">
          <div>Potential bills content</div>
        </Tab>
      </Tabs>
    );
  }
}

export default App;