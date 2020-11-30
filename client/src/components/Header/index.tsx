import React from 'react';
import {Header, HeaderText} from '../global';
import ButtonTransparent from '../ButtonTransparent';

interface ContainerProps{
  title: string;
  buttonContent: string;
  onClick?: (any?:any) => void;
}

const HeaderSection = ({title, buttonContent, onClick}:ContainerProps) => {

  const exist = ((buttonContent==='SALVAR') || ( buttonContent==='NOVO') || ( buttonContent==='CADASTRAR'))? true : false;

  return (
    <Header>
      <HeaderText>{title}</HeaderText>
      {exist&&
        <ButtonTransparent buttonContent={buttonContent} onClick={onClick} />
      }
    </Header>
  );
}

export default HeaderSection;
