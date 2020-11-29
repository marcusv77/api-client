import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class UpdateClient{
  public async handle(request:Request, response:Response) {
    const clientRepository = new ClientRepository();  
    const client = {...request.body, id: request.params.id};
    const exist = await clientRepository.findById(client.id);
    if(exist === undefined){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    const confNum = await clientRepository.update(client);
    const clientUpdated = {
      id: client.id,
      name: client.name
    }
    return response.json(clientUpdated); 
  }
}

export default new UpdateClient();