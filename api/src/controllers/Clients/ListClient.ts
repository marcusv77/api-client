import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class ListClient{
  public async handle(request:Request, response:Response) {
    const id = parseInt(request.params.id);
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findById(id);
    if(!client){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    return response.json(client); 
  }
}

export default new ListClient();