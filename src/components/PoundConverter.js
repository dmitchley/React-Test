import React from "react";

const PoundConverter = ({ countCurrency }) => {
  // import dollar amount from CurrencyConverter.js initial state and performed basic currency conversion
  const showPound = (countCurrency * 0.8).toFixed(2);

  return (
    <>
      <div className="text-center">
        <h2>Pound Converter</h2>

        <h3 style={{ color: "grey" }}>{showPound}</h3>
      </div>
    </>
  );
};

export default PoundConverter;
