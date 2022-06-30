import React from "react";

const EuroConverter = ({ countCurrency }) => {
  // import dollar amount from CurrencyConverter.js initial state and performed basic currency conversion
  const showEuro = (countCurrency * 0.94).toFixed(2);
  return (
    <>
      <div className="text-center">
        <h2>Euro Converter</h2>

        <h3 style={{ color: "grey" }}>{showEuro}</h3>
      </div>
    </>
  );
};

export default EuroConverter;
