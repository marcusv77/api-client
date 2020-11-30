import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Container, Paragraph, Obs} from '../../components/global';
import Header from '../../components/Header'
import Table from '../../components/Table'

function Dashboard() {

  const history = useHistory();

  const handleCreate = useCallback(async ()=> {
    history.push('/client');
  },[history]);

  return (
    <div className="Dashboard">
      <Header title="CONTROLE" buttonContent="NOVO" onClick={handleCreate} />
      <Container>
        <Paragraph>Seja bem vindo a plataforma!</Paragraph>
        <Obs>Obs: Clique em um cliente específico para viualizar sua informações completas.</Obs>
        <Table />
      </Container>
    </div>
  );
}

export default Dashboard;
