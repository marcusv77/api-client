import {Request, Response, NextFunction} from 'express';
import ClientRepository from '../../repositories/ClientRepository';
import * as yup from 'yup';

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

  public async validate(req:Request, res:Response, next:NextFunction){
    try{
      const schema = yup.object().shape({
        name: yup.string().required(),
        address: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required(),
        cpf: yup.string().required()
      });

      await schema.validate(req.body, {abortEarly: false});
      return next();

    } catch(err){
      return res.status(400).json({message: 'Insira os campos corretamente.'});
    }
  }

}

export default new CreateClient();