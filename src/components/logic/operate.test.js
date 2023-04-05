import operate from './operate';

describe('Operate.js File Testing', () => {
  test('Should be add my pressing on the + ', () => {
    const numberOne = 1;
    const numberTwo = 2;
    const operation = '+';
    const expected = '3';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });

  test('Should be subtracta my pressing on the - ', () => {
    const numberOne = 2;
    const numberTwo = 2;
    const operation = '-';
    const expected = '0';
    const result = operate(numberOne, numberTwo, operation);
    expect(result).toBe(expected);
  });
});
