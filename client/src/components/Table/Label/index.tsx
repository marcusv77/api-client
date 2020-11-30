import React from 'react';
import './styles.css';

interface LabelProps{
  name: string;
  className?: string;
}

const LabelContent = ({name, className}:LabelProps) => {

  return (
    <div className={"tablelabel " + className}>
      <p>{name}</p>
    </div>
  );
}

export default LabelContent;
