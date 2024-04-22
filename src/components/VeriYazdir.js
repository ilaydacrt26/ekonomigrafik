import React from 'react';

function VeriYazdir({ A, B, kontrol }) {
  const text = kontrol
    ? `1 A = ${B} B`
    : `1 B = ${A} A`;

  return <p id="values">{text}</p>;
}

export default VeriYazdir;