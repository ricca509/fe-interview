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
      fetch.mockResponse(JSON.stringify({ data: '12345' }));

      return fetchBills()
        .then(bills => {
          expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/bills')
          expect(bills).toEqual({ data: '12345'})
        });
    });
  });

  describe('patchBill', ()=> {
    it('should make the right PATCH request', () => {
      fetch.mockResponse();

      return patchBill(123, true)
        .then(() => {
          expect(fetch.mock.calls[0][0]).toEqual('http://localhost:3000/bills/123');
          expect(fetch.mock.calls[0][1]).toEqual({
            body: [
              {
                op: 'replace',
                path: '/isBill',
                value: true
              }
            ],
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PATCH'
          })
        });
    });
  });
});