import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [bill, setBill] = useState(50);
  const [tip, setTip] = useState(0.18);
  const [people, setPeople] = useState(1);

  const totalTip = bill * tip;
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
      <select
        id="serviceQual"
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
      >
        <option value={0.18}>18%</option>
        <option value={0.2}>20%</option>
        <option value={0.15}>15%</option>
        <option value={0.1}>10%</option>
        <option value={0.05}>5%</option>
      </select>

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
