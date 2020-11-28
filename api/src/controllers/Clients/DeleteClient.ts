import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class DeleteClient{
  public async handle(request:Request, response:Response) {
    const id = parseInt(request.params.id);
    const clientRepository = new ClientRepository();  
    const clientDeleted = await clientRepository.remove(id);
    return response.json(clientDeleted); 
  }
}

export default new DeleteClient();