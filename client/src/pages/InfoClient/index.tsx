import { colors } from '@material-ui/core';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Input} from '../../components/global';
import Header from '../../components/Header';
import './styles.css';

function Client() {

  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');


  function handleBack(){
    history.push('/');
  }

  return (
    <div className="client">
      <Header title="PROPS" buttonContent="SALVAR" />
      <Container>
        <a onClick={handleBack}>Voltar</a>
        <div className="couple">
          <Input
            variant="filled"
            placeholder="Digite seu nome"
            label="Nome"
            value={name}
            style={{color: 'white'}}
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            variant="filled"
            placeholder="Digite seu email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
          <Input
            variant="filled"
            placeholder="Digite seu endereço"
            label="Endereço"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <div className="couple">
            <Input
              variant="filled"
              placeholder="Digite seu CPF"
              label="CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <Input
              variant="filled"
              placeholder="Digite seu telefone"
              label="Telefone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </Container>
    </div>
  );
}

export default Client;
