import React from 'react';
import {Header, HeaderText} from '../global';
import ButtonTransparent from '../ButtonTransparent';

interface ContainerProps{
  title: string;
  buttonContent: string;
  action?: (any?:any) => void;
}

const HeaderSection = ({title, buttonContent, action}:ContainerProps) => {

  const exist = ((buttonContent==='SALVAR') || ( buttonContent==='NOVO') || ( buttonContent==='CADASTRAR'))? true : false;

  return (
    <Header>
      <HeaderText>{title}</HeaderText>
      {exist&&
        <ButtonTransparent buttonContent={buttonContent} action={action} />
      }
    </Header>
  );
}

export default HeaderSection;
