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

  console.log(clients);

  return (
    <Table>
      <LabelLine />

      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />
      <Line />

    </Table>
  );
}

export default TableContent;
