import React from 'react';
import Label from '../Label';
import './styles.css';

const LabelLine = () => {

  return (
    <div className="labelline">
      <div className="tableline">
        <Label name="Nome" />
        <Label name="Email" className="hide" />
        <Label name="Telefone" className="hide" />
      </div>
    </div>
  );
}

export default LabelLine;
