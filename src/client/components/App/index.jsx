import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Bills from '../Bills';
import {
  selectPotentialBills,
  selectBills,
  fetchBills,
  patchBill
} from '../../state/App/module';
import '../../../../node_modules/normalize.css/normalize.css';
import '../../style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bills: [],
      loading: false,
      error: undefined
    };

    this.onBillSelected = this.onBillSelected.bind(this);
    this.onPotentialBillSelected = this.onPotentialBillSelected.bind(this);
    this.fetchAllBills = this.fetchAllBills.bind(this);
    this.updateBill = this.updateBill.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  componentDidMount()  {
    this.setState(() => ({
      loading: true
    }));

    this.fetchAllBills();
  }

  fetchAllBills() {
    fetchBills()
      .then(bills => {
        this.setState(() => ({
          bills,
          loading: false,
        }));
      })
      .catch(this.handleError);
  }

  handleError(e) {
    console.log('Error', e);
    this.setState(() => ({
      loading: false,
      error: true
    }));
  }

  onBillSelected(id) {
    patchBill(id, false)
      .then(() => this.updateBill(id, false))
      .catch(this.handleError);
  }

  onPotentialBillSelected(id) {
    patchBill(id, true)
      .then(() => this.updateBill(id, true))
      .catch(this.handleError);
  }

  updateBill(id, isBill) {
    const bills = this.state.bills
      .map(bill => {
        if (bill.id === id) {
          return {
            ...bill,
            isBill
          };
        }
        return bill;
      });

    this.setState(() => ({
      bills
    }));
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
        <div className="container">
          <Tabs>
            <Tab title="Bills">
              <Bills bills={selectBills(this.state)} onActionClicked={this.onBillSelected} />
            </Tab>
            <Tab title="Potential bills">
              <Bills bills={selectPotentialBills(this.state)} onActionClicked={this.onPotentialBillSelected} />
            </Tab>
          </Tabs>
        </div>
      );
    }

    return false;
  }
}

export default App;