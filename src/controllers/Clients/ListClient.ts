import {Request, Response, NextFunction} from 'express';
import ClientRepository from '../../repositories/ClientRepository';
import * as yup from 'yup';

class ListClient{
  public async handle(request:Request, response:Response) {
    const id = parseInt(request.params.id);
    const clientRepository = new ClientRepository();
    const client = await clientRepository.findById(id);

    if(client === undefined){
      return response.status(400).json({
        error: 'Client do not exists'
      });
    }
    
    return response.json(client); 
  }

  public async validate(req:Request, res:Response, next:NextFunction){
    try{
      const schema = yup.object().shape({
        id: yup.number().required(),
      });

      await schema.validate(req.body, {abortEarly: false});
      return next();

    } catch(err){
      return res.status(400).json({message: 'Insira o campo corretamente.'});
    }
  }

}

export default new ListClient();