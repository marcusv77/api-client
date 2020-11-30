import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import {Edit, Remove} from '../../global'
import Column from '../Column';
import {IClient, deleteClient} from '../../../services/client';
import './styles.css';

interface PropsClient{
  client: IClient;
}

const LineContent = ({client}:PropsClient) => {

  const history = useHistory();

  const handleView = useCallback(async (client:IClient)=> {
    const data = {
      client,
      action: "VISUALIZAR"
    }
    history.push('/client', {data});
  },[history]);

  const handleEdit = useCallback(async (client:IClient)=> {
    const data = {
      client,
      action: "SALVAR"
    }
    history.push('/client', {data});
  },[history]);

  async function handleDelete(client: IClient){
    const clientDeleted = await deleteClient(client);
    console.log(clientDeleted);
    //set array
  }

  return (
    <div className="line">
      <a onClick={() => handleView(client)} className="tableline">
        <Column name={client?.name} />
        <Column name={client?.email} className="hide" />
        <Column name={client?.phone} className="hide" />
      </a>
      <div className="icons">
        <a onClick={() => handleEdit(client)}><Edit /></a>
        <a onClick={() => handleDelete(client)}><Remove /></a>
      </div>
    </div>
  );
}

export default LineContent;
