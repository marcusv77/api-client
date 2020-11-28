import { IClient, IRequestCreateClient } from "../dto/Client";
import db from '../database/connections';

export interface IClientsRepository {
  create(data: IRequestCreateClient): Promise<IRequestCreateClient>;
  listClients(): Promise<IClient[] | []>;
  findById(id: number): Promise<IClient | undefined>;
  findByCpf(cpf: string): Promise<IClient | undefined>;
  remove(id: number): Promise<number>;
  update(user: IClient): Promise<IClient>;
}

class ClientRepository implements IClientsRepository{
  public async create(data:IRequestCreateClient): Promise<IClient> {
    const ids = await db('clients').insert(data);
    const client:IClient = {
      ...data,
      id: ids[0]
    };
    return (client);
  }  

  public async listClients(): Promise<IClient[] | []> {
    const clients = await db('clients');
    return clients;
  }
  
  public async findById(id: number): Promise<IClient | undefined> {
    const client:IClient = await db('clients').where('id', id).first();    
    return client;
  }

  public async findByCpf(cpf: string): Promise<IClient | undefined> {
    const client:IClient = await db('clients').where('cpf', cpf).first();    
    return client;
  }

  public async remove(id:number): Promise<number> {
    const client = await db('clients').where('id', id).first().delete();    
    return client;
  }

  public async update(user: IClient): Promise<IClient> {
    const id = user.id;
    const client:IClient = await db('clients').where('id', id).first().update(user);    
    return client;  
  }  
}

export default ClientRepository;

