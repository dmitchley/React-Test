import React from "react";

const RandConverter = ({ countCurrency }) => {
  // import dollar amount from CurrencyConverter.js initial state and performed basic currency conversion
  const showRand = (countCurrency * 15).toFixed(2);
  return (
    <>
      <div className="text-center mt-4">
        <h2>Rand Converter</h2>

        <h3 style={{ color: "grey" }}>{showRand}</h3>
      </div>
    </>
  );
};

export default RandConverter;
