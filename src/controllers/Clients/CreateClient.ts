import {Request, Response} from 'express';
import ClientRepository from '../../repositories/ClientRepository';

class CreateClient{
  public async handle(request:Request, response:Response) {
    const data = request.body;
    const clientRepository = new ClientRepository();
    const exist = await clientRepository.findByCpf(data.cpf);
    if(exist !== undefined){
      return response.status(400).json({
        error: 'Client alredy exists.'
      });    
    }
    const client = await clientRepository.create(data);
    const newClient = {
      id: client.id,
      name: client.name
    }
    return response.json(newClient);
  }
}

export default new CreateClient();