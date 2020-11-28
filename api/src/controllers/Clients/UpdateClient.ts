import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class UpdateClient{
  public async handle(request:Request, response:Response) {
    const clientRepository = new ClientRepository();  
    const client = {...request.body, id: request.params.id};
    const clientUpdated = await clientRepository.update(client);
    return response.json(clientUpdated); 
  }
}

export default new UpdateClient();