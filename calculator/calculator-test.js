
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 4,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('230.29');
});



it("should return a result with 2 decimal places", function() {
  // ..  
  const values = {
    amount: 20000,
    years: 10,
    rate: 3.4
  };
  expect(calculateMonthlyPayment(values)).toEqual('196.84');
});

