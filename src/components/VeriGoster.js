import React, { useState } from 'react';
import VeriYazdir from './VeriYazdir';

function VeriGoster() {
  const [A, setA] = useState(1);
  const [B, setB] = useState(1);
  const [kontrol, setKontrol] = useState(false);

  const random = () => {
    return Math.random() * 201 - 100;
  };

  const para = () => {
    const randomValue = A + A * (random() / 100);
    setA(randomValue);
    setB(kontrol ? randomValue / (100 / 25) : randomValue * (25 / 100));
  };

  const degistir = () => {
    setKontrol(!kontrol);
  };

  return (
    <div>
      <VeriYazdir A={A.toFixed(2)} B={B.toFixed(2)} kontrol={kontrol} />
      <button className="veriButton" onClick={degistir}>
        Değiştir
      </button>
    </div>
  );
}

export default VeriGoster;