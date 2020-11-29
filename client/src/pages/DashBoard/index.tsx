import React from 'react';
import {Container, Paragraph, Obs} from '../../components/global';
import Header from '../../components/Header'
import Table from '../../components/Table'

function Dashboard() {
  return (
    <div className="Dashboard">
      <Header title="CONTROLE DE CLIENTES" buttonContent="CADASTRAR" />
      <Container>
        <Paragraph>Seja bem vindo a plataforma!</Paragraph>
        <Obs>Obs: Clique em um cliente específico para viualizar sua informações completas.</Obs>
        <Table />
      </Container>
    </div>
  );
}

export default Dashboard;
