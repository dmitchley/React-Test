import React, { useState } from "react";
// components
import RandConverter from "./components/RandConverter";
import PoundConverter from "./components/PoundConverter";
import EuroConverter from "./components/EuroConverter";

const CurrencyConverter = () => {
  // initial state of Dollar currency
  const [countCurrency, setCurrency] = useState(0);

  // function that target input value and does basic currency conversion
  const getCurrencyInput = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="container-main-currency">
      <h1>Convert Dollar to Rand,Pound, and Euro!</h1>
      <input onChange={getCurrencyInput} className="form-control" />

      {/* The countCurrency input State is passed to the child components below that perform the conversion the different currencies */}
      <RandConverter countCurrency={countCurrency} />

      <PoundConverter countCurrency={countCurrency} />

      <EuroConverter countCurrency={countCurrency} />
    </div>
  );
};

export default CurrencyConverter;
