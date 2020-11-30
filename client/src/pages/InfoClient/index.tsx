import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Container, Input} from '../../components/global';
import Header from '../../components/Header';
import {IClient, createClient, updateClient} from '../../services/client';
import './styles.css';

interface Data{
  data: {
    client: IClient;
    action: string;
  }
}

function Client() {

  const history = useHistory();

  const {state} = useLocation<Data>();

  const client = state?.data?.client;
  const action = state?.data?.action;

  const [name, setName] = useState<string>(client?.name);
  const [email, setEmail] = useState(client?.email);
  const [address, setAddress] = useState(client?.address);
  const [cpf, setCpf] = useState(client?.cpf);
  const [phone, setPhone] = useState(client?.phone);

  function handleBack(){
    history.push('/');
  }

  async function handleCreate (){
    const data = {
      name,
      address,
      email,
      cpf,
      phone
    }
    const client = await createClient(data);
    console.log(client);
    //set array
    //history.push('/');
  }

  async function handleUpdate(){
    const data = {
      id: state?.data?.client?.id,
      name,
      address,
      email,
      cpf,
      phone
    }
    const client = await updateClient(data);
    console.log(client);
    //set array
    //history.push('/');
  }

  const [title, setTitle] = useState<string>('');
  const [buttonContent, setButtonContent] = useState<string>('');
  const [actionFunction, setActionFunction] = useState<() => void>(() => {});
  
  useEffect(() => {
    if(action === "VISUALIZAR"){
      setTitle("VISUALIZAÇÃO");
      setButtonContent('');
      setActionFunction(() => {});
    } else if(action === "SALVAR"){
      setTitle("EDIÇÃO");
      setButtonContent('SALVAR');
      setActionFunction(handleUpdate);
    } else {
      setTitle("CADASTRO");
      setButtonContent('CADASTRAR');
      setActionFunction(handleCreate);
    }  
  }, [action, setTitle, setButtonContent, setActionFunction]);

  console.log(actionFunction);

  return (
    <div className="client">
      <Header title={title} buttonContent={buttonContent} onClick={() => actionFunction} />
      <Container>
        <a onClick={handleBack}>Voltar</a>
        <div className="couple">
          <Input
            variant="filled"
            placeholder="Digite seu nome"
            label="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            disabled={action==="VISUALIZAR"? true : false}
            InputLabelProps={{
              style: {
                color: '#A5A7A4'
              } 
            }}
            InputProps={{
              style: {
                color: 'white'
              }
            }}
          />
          <Input
            variant="filled"
            placeholder="Digite seu email"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={action==="VISUALIZAR"? true : false}
            InputLabelProps={{
              style: {
                color: '#A5A7A4'
              } 
            }}
            InputProps={{
              style: {
                color: 'white'
              }
            }}
          />
        </div>
          <Input
            variant="filled"
            placeholder="Digite seu endereço"
            label="Endereço"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            disabled={action==="VISUALIZAR"? true : false}
            InputLabelProps={{
              style: {
                color: '#A5A7A4'
              } 
            }}
            InputProps={{
              style: {
                color: 'white'
              }
            }}
          />
          <div className="couple">
            <Input
              variant="filled"
              placeholder="Digite seu CPF"
              label="CPF"
              value={cpf}
              onChange={(event) => setCpf(event.target.value)}
              disabled={action==="VISUALIZAR"? true : false}
              InputLabelProps={{
                style: {
                  color: '#A5A7A4'
                } 
              }}
              InputProps={{
                style: {
                  color: 'white'
                }
              }}
            />
            <Input
              variant="filled"
              placeholder="Digite seu telefone"
              label="Telefone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              disabled={action==="VISUALIZAR"? true : false}
              InputLabelProps={{
                style: {
                  color: '#A5A7A4'
                } 
              }}
              InputProps={{
                style: {
                  color: 'white'
                }
              }}
            />
          </div>
        </Container>
    </div>
  );
}

export default Client;
