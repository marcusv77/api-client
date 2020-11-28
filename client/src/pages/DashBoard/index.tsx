import React from 'react';
import {Paragraph, Container} from '../../components/global';
import Header from '../../components/Header'
import Table from '../../components/Table'
import './styles.css';

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header title="CONTROLE DE CLIENTES" buttonContent="Cadastrar" />
      <Container>
        <Paragraph>Seja bem vindo a plataforma!</Paragraph>
        <Paragraph>Obs: Clique em um cliente específico para viualizar sua informações completas.</Paragraph>
        <Table />
      </Container>
    </div>
  );
}

export default Dashboard;
