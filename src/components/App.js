import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * tipPercentage) / 100;
  const tipPerPerson =
    people > 0 ? (totalTip / people).toFixed(2) : "0.00";

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

      <p>Tip Per Person: ${tipPerPerson}</p>
    </div>
  );
};

export default App;
