import api from './index';

export interface IClient {
  id: number;
  name: string;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}

export interface ILitleClient {
  id: number;
  name: string;
}

export interface IRequestCreateClient {
  name: string;
  address: string;
  phone: string;
  email: string;
  cpf: string;
}

export async function createClient(newClient:IRequestCreateClient): Promise<ILitleClient> {
  const {data} = await api.post('api/client', newClient);
  return data;
}
export async function listClients(): Promise<IClient[]> {
  const {data} = await api.get('api/clients');
  return data;
}
export async function listClient(): Promise<IClient> {
  const {data} = await api.get('api/client');
  return data;
}
export async function updateClient(updatedClient:IClient): Promise<ILitleClient> {
  const {data} = await api.put(`api/client/${updatedClient.id}`, updatedClient);
  return data;
}
export async function deleteClient(client:IClient): Promise<ILitleClient> {
  const {data} = await api.delete(`api/client/${client.id}`);
  return data;
}
