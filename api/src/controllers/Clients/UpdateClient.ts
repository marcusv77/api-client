import {Request, Response} from 'express';
import db from '../../database/connections';

class UpdateClient{
  public async handle(request:Request, response:Response) {
    const clients = await db('clients');
    return response.json(clients); 
  }
}

export default new UpdateClient();