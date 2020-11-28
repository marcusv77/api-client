import {Request, Response} from 'express';
import db from '../../database/connections';

class DeleteClient{
  public async handle(request:Request, response:Response) {
    const clients = await db('clients');
    return response.json(clients); 
  }
}

export default new DeleteClient();