import React from 'react';

function VeriYazdir({kontrol, A, B }) {
  const text = kontrol
    ? `1 A = ${(A/B)} B`
    : `1 B = ${(B/A)} A`;
  return <p id="values">{text}</p>;
}

export default VeriYazdir;