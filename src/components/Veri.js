import React, { useEffect, useState } from 'react';
import VeriGoster from './VeriGoster';
import VeriGrafik from './VeriGrafik';

function Veri() {
  const [arrayA, setArrayA] = useState([]);
  const [arrayB, setArrayB] = useState([]);
  const [_kontrol, set_kontrol] = useState(false);

  // console.log(_kontrol);

  return (
    <div className="veri">
      <VeriGoster onChangePara={((A, B, kontrol) => {

        let _arrayA = JSON.parse(JSON.stringify(arrayA));
        _arrayA.push(A);
        if(_arrayA.length >= 10){
            _arrayA.shift()
        }
        setArrayA(_arrayA);

        let _arrayB = JSON.parse(JSON.stringify(arrayB));
        _arrayB.push(B);
        if(_arrayB.length >= 10){
          _arrayB.shift()
        }
        setArrayB(_arrayB);

        set_kontrol(kontrol);

        console.log("arrayA --> " + arrayA);
        console.log("arrayB --> " + arrayB);
      })} />

      <VeriGrafik arrayA={arrayA} arrayB={arrayB} _kontrol={_kontrol} />

    </div>
  );
}

export default Veri;