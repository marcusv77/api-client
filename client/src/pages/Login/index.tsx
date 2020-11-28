import React, {useState} from 'react';
import {FormControl} from '@material-ui/core';
import {Link} from "react-router-dom";
import {Input, Logo, SubTitle, Paragraph, Section, MainButton} from '../../components/global';
import './styles.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    console.log('Entrei');
  }

  return (
    <div className="login">
      <Section>
        <Logo />
        <Paragraph>Dynamus Investimentos</Paragraph>
        <SubTitle>Login</SubTitle>
      </Section>
      <FormControl>
        <Input
          variant="filled"
          placeholder="Digite seu e-mail"
          label="E-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          variant="filled"
          placeholder="Digite sua senha"
          label="Senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Section>
          <Link to='/forgot-pass'><Paragraph>Esqueci minha senha</Paragraph></Link>
        </Section>
        <MainButton variant="contained" color="primary" onClick={handleLogin}>ENTRAR</MainButton>
      </FormControl>
    </div>
  );
}

export default Login;
