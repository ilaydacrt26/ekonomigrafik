import React, { useEffect, useState } from 'react';
import VeriYazdir from './VeriYazdir';

function VeriGoster({onChangePara}) {
  const [A, setA] = useState(1);
  const [B, setB] = useState(1);
  const [kontrol, setKontrol] = useState(true);

  const oran = () => {
      let random = (Math.random())
      return random;
  }

  const random = () => {
    let yon = oran();
    var randomdeger = (Math.random()*100).toFixed(0); // sıfırlanıp durmasın diye 100ü dahil etmedim.
    if(yon > 0.5){
      return randomdeger;
    }
    return (-1 * randomdeger);
  }; 

  const sureBelirleme = () => {
    let duration = Math.random() * 2.5 + 0.5;
    setTimeout(() => {
        money();
    }, duration * 1000);
  };

  useEffect(() => {
    sureBelirleme();
  }, [A,B]);

  const money = () => {
    let deger = random();
    console.log("deger : " , deger); 
    if(kontrol){
      setA(A + A * deger/100);
    }else{
      setB(B + B * deger/100);
    }
    onChangePara(A, B, kontrol)
  };

  const degistir = () => {
    setKontrol(!kontrol);
  };

  return (
    <div>
      <VeriYazdir kontrol={kontrol} A={A} B={B} />
      <button className="veriButton" onClick={degistir}>
        Değiştir
      </button>
    </div>
  );
}

export default VeriGoster;