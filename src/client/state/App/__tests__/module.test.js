import {
  selectPotentialBills,
  selectBills,
  fetchBills,
  patchBill
} from '../module';

describe('State module', ()=> {
  beforeEach(() => {
      fetch.resetMocks();
  });

  describe('fetchBills', ()=> {
    it('should make the right request and return the response', () => {
      fetch.mockResponse(JSON.stringify({ data: '12345' }))

      fetchBills()
        .then(bills => {
          expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/bills')
          expect(bills).toEqual({ data: '12345'})
        });
    });
  });
});