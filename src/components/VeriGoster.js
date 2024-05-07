import React, { useEffect, useState } from 'react';
import VeriYazdir from './VeriYazdir';

function VeriGoster({
  onChangePara
}) {
  const [A, setA] = useState(10);
  const [B, setB] = useState(10);
  const [kontrol, setKontrol] = useState(false);
  const [randomKontrol, setRandomKontrol] = useState(true);

  const random = () => {
    var randomdeger;
    if(randomKontrol){
      randomdeger = Math.random() * 100;
      setRandomKontrol(false);
    }else{
      randomdeger = Math.random() * (-75);
      setRandomKontrol(true);
    }
    return randomdeger;
  }

  // const random = () => {
  //   var randomdeger = Math.random() * 201 - 99;
  //   // console.log(randomdeger);
  //   // console.log(A);
  //   // console.log(B);
  //   if (randomdeger == 0 ){
  //     random();
  //   }
  //   return randomdeger;
  // };

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
    setB(randomValue);
    onChangePara(A, B, kontrol);
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