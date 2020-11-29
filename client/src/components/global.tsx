import styled from 'styled-components';
import {TextField} from '@material-ui/core';
import edit from '../assets/icons/edit.png';
import remove from '../assets/icons/remove.png';

//IMAGES

export const Edit = styled.img.attrs({
  src: edit,
})`
  width: 20px;
  height: 20px;
  margin: 5px;
  align-self: center;
`;

export const Remove = styled.img.attrs({
  src: remove,
})`
  width: 25px;
  height: 25px;
  margin: 5px;
  align-self: center;
`;

//TEXTS

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

export const Paragraph = styled.h2`
  font-weight: normal;
  text-align: left;
  margin-bottom: 25px;
  color: #FFFFFF;
`;

export const Obs = styled.p`
  font-weight: normal;
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
  background-color: #27293D;
`;

export const Table = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

//INPUTS

export const Input = styled(TextField).attrs({
  style: {flex: 1, marginLeft: 5, marginRight: 5, marginBottom: 30},
})`
`;