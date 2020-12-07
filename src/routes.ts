import express from 'express';
import CreateClient from './controllers/Clients/CreateClient';
import ListClients from './controllers/Clients/ListClients';
import ListClient from './controllers/Clients/ListClient';
import UpdateClient from './controllers/Clients/UpdateClient';
import DeleteClient from './controllers/Clients/DeleteClient';

const routes = express.Router();

routes.get("/", (req, res)=> {
  return res.json({success:true})
});

routes.post('/api/client', CreateClient.handle);
routes.get('/api/clients', ListClients.handle);
routes.get('/api/client/:id', ListClient.handle);
routes.put('/api/client/:id', UpdateClient.handle);
routes.delete('/api/client/:id', DeleteClient.handle);

export default routes;