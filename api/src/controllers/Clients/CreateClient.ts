import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class CreateClient{
  public async handle(request:Request, response:Response) {
    const data = request.body;
    const clientRepository = new ClientRepository();  
    try{
      const client = await clientRepository.create(data);
      return response.json(client);
    }
    catch(err){
      return response.status(400).json({
        error: 'Unexpected error while creating a new client.'
      });
    }    
  }
}

export default new CreateClient();