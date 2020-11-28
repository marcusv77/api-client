import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

//Find Error
class ListClient{
  public async handle(request:Request, response:Response) {
    const id = request.params.id;
    const clientRepository = new ClientRepository();
    const client = clientRepository.findById(id);
    if(!client){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    return response.json(client); 
  }
}

export default new ListClient();