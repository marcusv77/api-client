import React, {useState, useEffect} from 'react';
import {Table} from '../global';
import Line from './Line';
import LabelLine from './LabelLine';

import {listClients, IClient} from  '../../services/client';

const TableContent = () => {

  const [clients, setClients] = useState<IClient[]>([]);

  useEffect(() => {
    async function handleList(){
      const list = await listClients();
      setClients(list);
    }
    handleList();
  }, [setClients]);

  return (
    <Table>
      <LabelLine />

      {clients.map((client) => (
        <Line client={client} />
      ))}

    </Table>
  );
}

export default TableContent;
