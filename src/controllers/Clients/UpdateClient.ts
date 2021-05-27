import {Request, Response, NextFunction} from 'express';
import ClientRepository from '../../repositories/ClientRepository';
import * as yup from 'yup';

class UpdateClient{
  public async handle(request:Request, response:Response) {
    const clientRepository = new ClientRepository();  
    const client = {...request.body, id: request.params?.id};
    const exist = await clientRepository.findById(client?.id);

    if(exist === undefined){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    
    const confNum = await clientRepository.update(client);

    const clientUpdated = {
      id: client?.id,
      name: client?.name
    }
    
    return response.json(clientUpdated); 
  }

  public async validate(req:Request, res:Response, next:NextFunction){
    try{
      const schema = yup.object().shape({
        id: yup.number().required(),
        name: yup.string(),
        address: yup.string(),
        phone: yup.string(),
        email: yup.string(),
        cpf: yup.string()
      });

      await schema.validate(req.body, {abortEarly: false});
      return next();

    } catch(err){
      return res.status(400).json({message: 'Insira os campos corretamente.'});
    }
  }
}

export default new UpdateClient();