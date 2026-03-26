import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helpers";

test('button click flow', () => {
  // render App
  render(<App />);

  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkBoxElement = screen.getByRole("checkbox", { name: /disable button/i });

  // check initial condition
  expect(buttonElement).not.toBeDisabled();
  expect(checkBoxElement).not.toBeChecked();

  // click checkbox to disable button
  fireEvent.click(checkBoxElement)
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray')

  // click checkbox again to re-enable button
  fireEvent.click(checkBoxElement)
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('medium-violet-red')
});

test('checkbox flow after button click', () => {
  // render App
  render(<App />);

  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", { name: /disable button/i });

  // click button to change to blue
  fireEvent.click(buttonElement);

  // click checkbox to disable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass('gray')

  // click checkbox again to re-enable button
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).toHaveClass('midnight-blue')
})

describe('kebabCaseToTitleCase', () => {
  test('works for no hyphens', () => {
    expect(kebabCaseToTitleCase('red')).toBe('Red')
  })
  test('works for one hyphen', () => {
    expect(kebabCaseToTitleCase('midnight-blue')).toBe('Midnight Blue')
  })
  test('works for mulitple hyphens', () => {
    expect(kebabCaseToTitleCase('medium-violet-red')).toBe('Medium Violet Red')
  })
})
