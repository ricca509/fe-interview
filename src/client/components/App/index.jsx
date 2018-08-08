import React from 'react';
import Tabs from '../Tabs';
import Tab from '../Tab';
import Bills from '../Bills';

const billsList = [
  {
    "name": "Vodafone",
    "isBill": false,
    "transactions": [
      {
        "amount": 12.34,
        "date": "2017-01-13"
      },
      {
        "amount": 14.34,
        "date": "2017-02-13"
      },
      {
        "amount": 15.54,
        "date": "2017-03-13"
      },
      {
        "amount": 11.34,
        "date": "2017-04-13"
      },
      {
        "amount": 18.99,
        "date": "2017-05-13"
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
      },
      {
        "amount": 82.17,
        "date": "2017-02-01"
      },
      {
        "amount": 82.17,
        "date": "2017-03-01"
      },
      {
        "amount": 82.17,
        "date": "2017-04-01"
      },
      {
        "amount": 82.17,
        "date": "2017-05-01"
      }
    ],
    "id": "5a5caa8efe33900100fd8ed6"
  },
  {
    "name": "Mortgage",
    "isBill": true,
    "transactions": [
      {
        "amount": 1023,
        "date": "2017-01-01"
      },
      {
        "amount": 1023,
        "date": "2017-02-01"
      },
      {
        "amount": 1023,
        "date": "2017-03-01"
      },
      {
        "amount": 1023,
        "date": "2017-04-01"
      },
      {
        "amount": 1023,
        "date": "2017-05-01"
      }
    ],
    "id": "5a5caad4fe33900100fd8ed7"
  },
  {
    "name": "Netflix",
    "isBill": true,
    "transactions": [
      {
        "amount": 19,
        "date": "2017-01-02"
      },
      {
        "amount": 19,
        "date": "2017-02-02"
      },
      {
        "amount": 19,
        "date": "2017-03-02"
      },
      {
        "amount": 19,
        "date": "2017-04-02"
      },
      {
        "amount": 19,
        "date": "2017-05-02"
      }
    ],
    "id": "5a5cab18fe33900100fd8ed8"
  },
  {
    "name": "Transfer to flatmate",
    "isBill": true,
    "transactions": [
      {
        "amount": 450,
        "date": "2017-01-02"
      },
      {
        "amount": 450,
        "date": "2017-02-02"
      },
      {
        "amount": 450,
        "date": "2017-03-02"
      },
      {
        "amount": 450,
        "date": "2017-04-02"
      },
      {
        "amount": 450,
        "date": "2017-05-02"
      }
    ],
    "id": "5a5cab3bfe33900100fd8ed9"
  },
  {
    "name": "Credit Card",
    "isBill": true,
    "transactions": [
      {
        "amount": 50,
        "date": "2017-01-22"
      },
      {
        "amount": 50,
        "date": "2017-02-22"
      },
      {
        "amount": 62.34,
        "date": "2017-03-22"
      },
      {
        "amount": 82.87,
        "date": "2017-04-22"
      },
      {
        "amount": 450,
        "date": "2017-05-22"
      }
    ],
    "id": "5a5cab88fe33900100fd8eda"
  },
  {
    "name": "Pret",
    "isBill": false,
    "transactions": [
      {
        "amount": 4.99,
        "date": "2017-01-22"
      },
      {
        "amount": 6,
        "date": "2017-01-22"
      },
      {
        "amount": 2.34,
        "date": "2017-03-10"
      },
      {
        "amount": 2.87,
        "date": "2017-04-21"
      },
      {
        "amount": 4,
        "date": "2017-05-02"
      }
    ],
    "id": "5a5cabd4fe33900100fd8edb"
  },
  {
    "name": "ASOS",
    "isBill": false,
    "transactions": [
      {
        "amount": 18.92,
        "date": "2017-01-22"
      },
      {
        "amount": 6.34,
        "date": "2017-02-22"
      },
      {
        "amount": 112.34,
        "date": "2017-03-10"
      },
      {
        "amount": 565.27,
        "date": "2017-04-21"
      },
      {
        "amount": 8,
        "date": "2017-07-02"
      }
    ],
    "id": "5a5cac65fe33900100fd8edc"
  }
];

const bills = billsList
  .filter(({ isBill }) => isBill)

const potentialBills = billsList
  .filter(({ isBill }) => !isBill)

const onBillSelected = (id) => {
  console.log('onBillSelected', id);
};

const onPotentialBillSelected = (id) => {
  console.log('onPotentialBillSelected', id);
};

class App extends React.Component {
  render () {
    return (
      <Tabs>
        <Tab title="Bills">
          <Bills bills={bills} onActionClicked={onBillSelected} />
        </Tab>
        <Tab title="Potential bills">
          <Bills bills={potentialBills} onActionClicked={onPotentialBillSelected} />
        </Tab>
      </Tabs>
    );
  }
}

export default App;