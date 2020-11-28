import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class CreateClient{
  public async handle(request:Request, response:Response) {
    const data = request.body;
    const clientRepository = new ClientRepository();
    const exist = clientRepository.findByCpf(data.cpf);
    if(exist !== undefined){
      return response.status(400).json({
        error: 'User alredy exists.'
      });    
    }
    try{
      const client = await clientRepository.create(data);
      const newClient = {
        id: client.id,
        name: client.name
      }
      return response.json(newClient);
    }
    catch(err){
      return response.status(400).json({
        error: 'Unexpected error while creating a new client.'
      });
    }    
  }
}

export default new CreateClient();