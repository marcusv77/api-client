import React from 'react';
import {Header, HeaderText} from '../global';
import ButtonTransparent from '../ButtonTransparent';
import './styles.css';

interface ContainerProps{
  title: string;
  buttonContent: string;
}

const HeaderSection = ({title, buttonContent}:ContainerProps) => {

  return (
    <Header>
      <HeaderText>{title}</HeaderText>
      <ButtonTransparent buttonContent={buttonContent} />
    </Header>
  );
}

export default HeaderSection;
