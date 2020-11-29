import React from 'react';
import './styles.css';

interface ContainerProps{
  buttonContent: string;
}

const HeaderSection = ({buttonContent}:ContainerProps) => {

  function handleCreate(){

  }

  function handleUpdate(){
    
  }

  const action = buttonContent==='CADASTRAR'? handleCreate : handleUpdate;

  return (
    <button onClick={action}>{buttonContent}</button>
  );
}

export default HeaderSection;
