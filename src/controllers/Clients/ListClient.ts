import {Request, Response, NextFunction} from 'express';
import ClientRepository from '../../repositories/ClientRepository';
import * as yup from 'yup';

class ListClient{
  public async handle(request:Request, response:Response) {
    const id = parseInt(request.params?.id);
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findById(id);

    if(client === undefined){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    
    return response.json(client); 
  }
}

export default new ListClient();