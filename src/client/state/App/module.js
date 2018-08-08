export const selectBills = state => state.bills
  .filter(({ isBill }) => isBill)

export const selectPotentialBills = state => state.bills
  .filter(({ isBill }) => !isBill)

const fetchJson = url => {
  return fetch(url)
    .then(response => {
      if(response.ok) {
        return response;
      }
      throw new Error('Network response was not ok.');
    })
    .then(response => response.json())
    .catch(e => console.log(`Error fetching ${url}`, e))
};

export const fetchBills = () => {
  return fetchJson('http://localhost:3000/bills')
};

export const patchBill = (id, isBill) => {
  return fetch(`http://localhost:3000/bills/${id}`, {
    method: 'PATCH',
    body: [
      {
        op: "replace",
        path: '/isBill',
        value: isBill
      }
    ]
  }).then(response => {
    if(response.ok) {
      return response;
    }
    throw new Error('Network response was not ok.');
  });
}