import React from 'react';
import Label from '../Label';
import './styles.css';

const LabelLine = () => {

  const screen = window.screen;

  return (
    <div className="line">
      <div className="tableline">
      {screen.width>950?
          <>
            <Label name="Teste" />
            <Label name="Teste" />
            <Label name="Teste" />
          </>
          :
          <Label name="Teste" />
        }
      </div>
    </div>
  );
}

export default LabelLine;
