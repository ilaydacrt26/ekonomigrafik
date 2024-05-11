import React from 'react';

function VeriYazdir({kontrol, rate }) {
  const text = kontrol
    ? `1 A = ${rate.toFixed(2)} B`
    : `1 B = ${(1/rate).toFixed(2)} A`;

  return <p id="values">{text}</p>;
}

export default VeriYazdir;