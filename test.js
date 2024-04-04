  test('add', () => {
    expect(calculator.add(5, 3)).toBe(8);
  });
  
  test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });
  
  test('multiply', () => {
    expect(calculator.multiply(5, 3)).toBe(15);
  });
  
  test('divide', () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });
  
  test('divide by zero', () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });
  
  // Path: test.js