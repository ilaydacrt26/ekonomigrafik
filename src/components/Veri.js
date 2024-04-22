import React, { useEffect } from 'react';
import VeriGoster from './VeriGoster';

function Veri({ para }) {

  const sureBelirleme = () => {
    let süre = Math.random() * 2.5 + 0.5;
    setTimeout(() => {
      para();
    }, süre * 1000);
  };

  useEffect(() => {
    sureBelirleme();
  }, []);

  return (
    <div className="veri">
      <VeriGoster para={para} />
    </div>
  );
}

export default Veri;