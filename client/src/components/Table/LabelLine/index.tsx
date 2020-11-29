import React from 'react';
import Label from '../Label';
import './styles.css';

const LabelLine = () => {

  return (
    <div className="line">
      <div className="tableline">
        <Label name="Nome" />
        <Label name="Email" />
        <Label name="Telefone" />
      </div>
    </div>
  );
}

export default LabelLine;
