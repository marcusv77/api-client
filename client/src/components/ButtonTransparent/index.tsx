import React from 'react';
import './styles.css';

interface ContainerProps{
  buttonContent: string;
  action?: (any?:any) => void;
}

const HeaderSection = ({buttonContent, action}:ContainerProps) => {

  return (
    <button onClick={action}>{buttonContent}</button>
  );
}

export default HeaderSection;
