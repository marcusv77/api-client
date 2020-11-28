import styled from 'styled-components';
import {TextField, Button} from '@material-ui/core';
import logo from '../assets/images/logo.png';

//IMAGENS

export const Logo = styled.img.attrs({
  src: logo,
})`
  width: 100px;
  height: 100px;
  align-self: center;
  margin: 10px;
`;

//TEXTOS

export const Title = styled.h1`
  font-weight: normal;
  text-align: center;
  padding: 5px;
  color: #FFFFFF;
`;

export const SubTitle = styled.h2`
  font-weight: bold;
  text-align: center;
  padding: 5px;
  color: #FFFFFF;
`;

export const Paragraph = styled.p`
  text-align: left;
  margin-bottom: 25px;
  color: #FFFFFF;
`;

export const HeaderText = styled(SubTitle)`
  text-align: left;
  padding: 0px;
`;

//CONTAINERS

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-self: center;
  padding: 40px;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 30px;
`;

export const Header = styled(Section)`
  align-items: center;
  justify-content: space-between;
  background-color: blue;
`;

export const Table = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

//INPUTS

export const Input = styled(TextField).attrs({
  style: {flex: 1, marginBottom: 30},
})`
`;

//BUTTONS

export const MainButton = styled(Button).attrs({
  style: {marginTop: 5, marginBottom: 5, padding: 5, width:'auto'},
})`
`;