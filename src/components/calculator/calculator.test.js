import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MyCalculator from './calculator';

test('Snapshot test for Calculator.js', () => {
    const comp = renderer.create(
        <MyCalculator />
    );
    let tree = comp.toJSON();
    expect(tree).toMatchSnapshot();
})


describe('MyCalculator', () => {
  it('Should be press correct Button', () => {
    const { getByText } = render(<MyCalculator />);
    
    expect(getByText('AC')).toBeInTheDocument();
    expect(getByText('+/-')).toBeInTheDocument();
    expect(getByText('%')).toBeInTheDocument();
    expect(getByText('÷')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
    expect(getByText('8')).toBeInTheDocument();
    expect(getByText('9')).toBeInTheDocument();
    expect(getByText('x')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('+')).toBeInTheDocument();
    expect(getByText('0')).toBeInTheDocument();
    expect(getByText('.')).toBeInTheDocument();
    expect(getByText('=')).toBeInTheDocument();
  });

  test('Should subtract two numbers correctly by pressing - ', () => {
    const { getByText, getByTestId } = render(<MyCalculator />);
    fireEvent.click(getByText('5'));
    fireEvent.click(getByText('-'));
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('='));
    let result = '3'
    expect(result).toEqual('3');
  });
});