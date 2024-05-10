import React, { useEffect, useState } from 'react';
import VeriYazdir from './VeriYazdir';

function VeriGoster({
  onChangePara
}) {
  const [A, setA] = useState(10);
  const [B, setB] = useState(10);
  const [kontrol, setKontrol] = useState(false);

  const oran = () => {
    return Math.random() * 10;
  }

  const random = () => {
    var randomdeger = Math.random() * 200 - 100;
    return randomdeger;
  };

  const sureBelirleme = () => {
    let süre = Math.random() * 2.5 + 0.5;
    setTimeout(() => {
        para();
    }, süre * 1000);
  };

  useEffect(() => {
    sureBelirleme();
  }, [A]);

  const para = () => {
    const randomValue = A + A * (random() / 100);
    setA(randomValue);
    setB(randomValue * oran());
    onChangePara(A, B, kontrol);
  };

  const degistir = () => {
    setKontrol(!kontrol);
  };

  return (
    <div>
      <VeriYazdir kontrol={kontrol} oran={oran()} />
      <button className="veriButton" onClick={degistir}>
        Değiştir
      </button>
    </div>
  );
}

export default VeriGoster;