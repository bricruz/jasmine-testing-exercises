
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 1000,
    years: 5,
    rate: 5.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('19.19');
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values = {
    amount: 1000,
    years: 10,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('11.10');
});

/// etc
