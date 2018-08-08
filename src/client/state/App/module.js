export const selectBills = state => state.bills
  .filter(({ isBill }) => isBill)

export const selectPotentialBills = state => state.bills
  .filter(({ isBill }) => !isBill)

const fetchJson = url => {
  return fetch(url)
    .then(response => {
      console.log(response)

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