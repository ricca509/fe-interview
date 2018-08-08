import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Bills from '../Bills';
import { selectPotentialBills, selectBills, fetchBills } from '../../state/App/module';

const onBillSelected = (id) => {
  console.log('onBillSelected', id);
};

const onPotentialBillSelected = (id) => {
  console.log('onPotentialBillSelected', id);
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      bills: [],
      loading: false,
      error: undefined
    };
  }

  componentDidMount()  {
    this.setState(() => ({
      loading: true
    }));

    fetchBills()
      .then(bills => {
        this.setState(() => ({
          bills,
          loading: false,
        }));
      })
      .catch(e => {
        console.log('Error');
        this.setState(() => ({
          loading: false,
          error: true
        }));
      })
  }

  render () {
    const { loading, error, bills } = this.state;
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }

    if (error) {
      return (
        <div>Error!</div>
      );
    }

    if (!loading && !error && bills.length) {
      return (
        <Tabs>
          <Tab title="Bills">
            <Bills bills={selectBills(this.state)} onActionClicked={onBillSelected} />
          </Tab>
          <Tab title="Potential bills">
            <Bills bills={selectPotentialBills(this.state)} onActionClicked={onPotentialBillSelected} />
          </Tab>
        </Tabs>
      );
    }

    return false;
  }
}

export default App;