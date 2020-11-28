import { IClient, IRequestCreateClient } from "../dto/Client";
import db from '../database/connections';

export interface IClientsRepository {
  create(data: IRequestCreateClient): Promise<IRequestCreateClient>;
  findById(id: number): Promise<IClient | undefined>;
  findByCpf(cpf: string): Promise<IClient | undefined>;
  //remove(user: IClient): Promise<IClient>;
  //save(user: IClient): Promise<IClient>;
}

class ClientRepository implements IClientsRepository{

  public async create(data:IRequestCreateClient): Promise<IRequestCreateClient> {
    await db('clients').insert(data);
    return (data);
  }  
  
  public async findById(id: number): Promise<IClient | undefined> {
    const clients = await db('clients');    
    const client = clients.find(item => item.id === id);
    return client;
  }

  public async findByCpf(cpf: string): Promise<IClient | undefined> {
    const clients = await db('clients');    
    const client = clients.find(item => item.cpf === cpf);
    return client;
  }

  /*  
  public async save(user: IClient): Promise<IClient> {
    return this.db.save(user);
  }

  public async remove(user:IClient): Promise<IClient> {
    return this.db.remove(user);
  }*/
  
}

export default ClientRepository;

