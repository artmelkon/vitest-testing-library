import { useState, useCallback } from "react";
import './App.css';
import { kebabCaseToTitleCase } from "./helpers";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  // const [buttonColor, setButtonColor] = useState("red");
  // const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const nextButtonColor = buttonColor === "medium-violet-red" ? "midnight-blue" : "medium-violet-red";
  const nextColorTitleClass = kebabCaseToTitleCase(nextButtonColor);

  const grayButton = isDisabled ? "gray whiteFont" : buttonColor;


  function checkBoxHandler(e) {
    const isChecked = e.target.checked;
    setIsDisabled(isChecked);
  }

  console.log('isDisabled: ', isDisabled)
  console.log('buttonColor: ', buttonColor)

  return (
    <div>
      <button className={grayButton} onClick={() => setButtonColor(nextButtonColor)} disabled={isDisabled}>Change to {nextColorTitleClass}</button>
      <br />
      <input type='checkbox' id='disable-button-checkbox' defaultChecked={isDisabled} onChange={checkBoxHandler} />
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;
