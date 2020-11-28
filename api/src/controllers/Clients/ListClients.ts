import {Request, Response} from 'express';
import db from '../../database/connections';

class ListClients{
  public async handle(request:Request, response:Response) {
    const clients = await db('clients');
    return response.json(clients); 
  }
}

export default new ListClients();