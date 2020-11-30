import React from 'react';
import './styles.css';

interface ContainerProps{
  buttonContent: string;
  onClick?: (any?:any) => void;
}

const HeaderSection = ({buttonContent, onClick}:ContainerProps) => {

  return (
    <button onClick={onClick}>{buttonContent}</button>
  );
}

export default HeaderSection;
