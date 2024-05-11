import React, { useEffect, useState } from 'react';
import VeriYazdir from './VeriYazdir';

function VeriGoster({
  onChangePara
}) {
  const [A, setA] = useState(10);
  const [B, setB] = useState(10);
  const [kontrol, setKontrol] = useState(false);

  const rate = () => {
    return Math.random() * 10;
  }

  const random = () => {
    var randomdeger = (Math.random() - 0.5);
    return randomdeger;
  };

  const sureBelirleme = () => {
    let duration = Math.random() * 2.5 + 0.5;
    setTimeout(() => {
        money();
    }, duration * 1000);
  };

  useEffect(() => {
    sureBelirleme();
  }, [A]);

  const money = () => {
    let randomValue = A + A * (random());
    if(randomValue < 1) {
      randomValue += 1;
    }
    setA(randomValue);
    setB(randomValue * rate());
    onChangePara(A, B, kontrol);
  };

  const degistir = () => {
    setKontrol(!kontrol);
  };

  return (
    <div>
      <VeriYazdir kontrol={kontrol} rate={rate()} />
      <button className="veriButton" onClick={degistir}>
        Değiştir
      </button>
    </div>
  );
}

export default VeriGoster;