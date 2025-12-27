import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);
  const [tipPerPerson, setTipPerPerson] = useState("0.00");

  const calculateTip = () => {
    const totalTip = (bill * tipPercentage) / 100;
    const result =
      people > 0 ? (totalTip / people).toFixed(2) : "0.00";
    setTipPerPerson(result);
  };

  return (
    <div id="container">
      {/* Do not remove the main div */}

      <label htmlFor="billamt">Bill:</label>
      <input
        id="billamt"
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <br />

      <label htmlFor="serviceQual">Tip Percentage:</label>
      <input
        id="serviceQual"
        type="number"
        value={tipPercentage}
        onChange={(e) => setTipPercentage(Number(e.target.value))}
      />

      <br />

      <label htmlFor="peopleamt">Number of People:</label>
      <input
        id="peopleamt"
        type="number"
        value={people}
        onChange={(e) => setPeople(Number(e.target.value))}
      />

      <br />

      <button onClick={calculateTip}>Calculate</button>

      <div id="totalTip">
        <p>Tip Per Person: ${tipPerPerson}</p>
      </div>
    </div>
  );
};

export default App;
