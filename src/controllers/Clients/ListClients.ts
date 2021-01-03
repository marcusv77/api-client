import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class ListClients{
  public async handle(request:Request, response:Response) {
    const clientRepository = new ClientRepository();  
    const clients = await clientRepository.listClients();
    
    return response.json(clients); 
  }
}

export default new ListClients();