import {Request, Response, NextFunction} from 'express';
import ClientRepository from '../../repositories/ClientRepository';
import * as yup from 'yup';

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

  public async validate(req:Request, res:Response, next:NextFunction){
    try{
      const schema = yup.object().shape({
        id: yup.number().required(),
      });

      await schema.validate(req.body, {abortEarly: false});
      return next();

    } catch(err){
      return res.status(400).json({message: 'Insira os campos corretamente.'});
    }
  }

}

export default new DeleteClient();