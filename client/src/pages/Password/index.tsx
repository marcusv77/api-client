import React, {useState} from 'react';
import {FormControl} from '@material-ui/core';
import Header from '../../components/Header';
import {Input, Logo, SubTitle, Paragraph, Section, MainButton} from '../../components/global';
import './styles.css';

function Password() {

  const [cpf, setCpf] = useState('');

  function handleLogin() {
    console.log('Entrei');
  }

  return (
    <div className="password">
      <Section>
        <Logo />
        <Paragraph>Dynamus Investimentos</Paragraph>
        <SubTitle>Esqueci minha senha</SubTitle>
      </Section>
      <FormControl>
        <Input
          variant="filled"
          placeholder="Digite seu CPF"
          label="CPF"
          value={cpf}
          onChange={(event) => setCpf(event.target.value)}
        />
        <MainButton variant="contained" color="primary" onClick={handleLogin}>ENVIAR</MainButton>        
      </FormControl>
    </div>
  );
}

export default Password;
