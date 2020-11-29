import React from 'react';
import {Header, HeaderText} from '../global';
import ButtonTransparent from '../ButtonTransparent';

interface ContainerProps{
  title: string;
  buttonContent: string;
}

const HeaderSection = ({title, buttonContent}:ContainerProps) => {

  const exist = ((buttonContent==='SALVAR') || ( buttonContent==='CADASTRAR'))? true : false;

  return (
    <Header>
      <HeaderText>{title}</HeaderText>
      {exist&&
        <ButtonTransparent buttonContent={buttonContent} />
      }
    </Header>
  );
}

export default HeaderSection;
