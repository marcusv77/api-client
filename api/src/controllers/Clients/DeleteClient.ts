import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class DeleteClient{
  public async handle(request:Request, response:Response) {
    const id = parseInt(request.params.id);
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findById(id);
    if(client === undefined){
      return response.status(400).json({
        error: 'Client do not exists.'
      });    
    }
    const clientDeletedNum = await clientRepository.remove(id);
    const clientDeleted = {
      id,
      name: client?.name
    }
    return response.json(clientDeleted); 
  }
}

export default new DeleteClient();