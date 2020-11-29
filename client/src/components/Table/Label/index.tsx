import React from 'react';
import './styles.css';

interface LabelProps{
  name: string;
}

const LabelContent = ({name}:LabelProps) => {

  return (
    <div className="tablelabel">
      <p>{name}</p>
    </div>
  );
}

export default LabelContent;
