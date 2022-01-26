import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';


test('checkButtonRender', () => {
  render(<App />);
  const buttonElement1 = screen.getByText('1');
  const buttonElement2 = screen.getByText('2');
  const buttonElement3 = screen.getByText('3');
  const buttonElement4 = screen.getByText('4');
  const buttonElement5 = screen.getByText('5');
  const buttonElement6 = screen.getByText('6');
  const buttonElement7 = screen.getByText('7');
  const buttonElement8 = screen.getByText('8');
  const buttonElement9 = screen.getByText('9');
  const buttonElement0 = screen.getByText('0');
  const buttonElementpoint = screen.getByText('.');
  const buttonElementDivide = screen.getByText('/');
  const buttonElementAdd = screen.getByText('+');
  const buttonElementSubtract = screen.getByText('-');
  const buttonElementMultiply = screen.getByText('*');
  fireEvent.click(buttonElement1);
  fireEvent.click(buttonElement2);
  fireEvent.click(buttonElement3);
  fireEvent.click(buttonElement4);
  fireEvent.click(buttonElement5);
  fireEvent.click(buttonElement6);
  fireEvent.click(buttonElement7);
  fireEvent.click(buttonElement8);
  fireEvent.click(buttonElement9);
  fireEvent.click(buttonElement0);
  fireEvent.click(buttonElementpoint);
  fireEvent.click(buttonElementDivide);
  fireEvent.click(buttonElementAdd);
  fireEvent.click(buttonElementSubtract);
  fireEvent.click(buttonElementMultiply);
  const displayElement = screen.getByTitle('input')
  expect(displayElement).toBeTruthy();
});

test('checkAddButton', () => {
  render(<App />);
  const num1 = screen.getByText('1');
  const num2 = screen.getByText('1');
  const add = screen.getByText('+');
  const equals = screen.getByText('=');
  fireEvent.click(num1);
  fireEvent.click(add);
  fireEvent.click(num2);
  fireEvent.click(equals);
  const displayResult = screen.getByTitle('results')
  expect(displayResult.innerHTML).toBe("2")
});

test('checkMultiplyButton', () => {
  render(<App />);
  const num1 = screen.getByText('5');
  const num2 = screen.getByText('7');
  const multiply = screen.getByText('*');
  const equals = screen.getByText('=');
  fireEvent.click(num1);
  fireEvent.click(multiply);
  fireEvent.click(num2);
  fireEvent.click(equals);
  const displayResult = screen.getByTitle('results')
  expect(displayResult.innerHTML).toBe("35");
});

test('checkDivideButton', () => {
  render(<App />);
  const num1 = screen.getByText('8');
  const num2 = screen.getByText('2');
  const divide = screen.getByText('/');
  const equals = screen.getByText('=');
  fireEvent.click(num1);
  fireEvent.click(divide);
  fireEvent.click(num2);
  fireEvent.click(equals);
  const displayResult = screen.getByTitle('results')
  expect(displayResult.innerHTML).toBe("4");
});

test('checkSubtractButton', () => {
  render(<App />);
  const num1 = screen.getByText('8');
  const num2 = screen.getByText('7');
  const subtract = screen.getByText('-');
  const equals = screen.getByText('=');
  fireEvent.click(num1);
  fireEvent.click(subtract);
  fireEvent.click(num2);
  fireEvent.click(equals);
  const displayResult = screen.getByTitle('results')
  expect(displayResult.innerHTML).toBe("1");
});

