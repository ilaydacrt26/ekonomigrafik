import React from 'react';

function VeriYazdir({kontrol, oran }) {
  const text = kontrol
    ? `1 A = ${oran.toFixed(2)} B`
    : `1 B = ${(1/oran).toFixed(2)} A`;

  return <p id="values">{text}</p>;
}

export default VeriYazdir;