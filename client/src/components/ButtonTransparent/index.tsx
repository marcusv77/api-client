import React from 'react';
import './styles.css';

interface ContainerProps{
  buttonContent: string;
}

const HeaderSection = ({buttonContent}:ContainerProps) => {

  return (
      <button onClick={() => {}}>{buttonContent}</button>
  );
}

export default HeaderSection;
