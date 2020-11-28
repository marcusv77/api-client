import express from 'express';
import CreateClient from './controllers/Clients/CreateClient';
import ListClients from './controllers/Clients/ListClients';
import ListClient from './controllers/Clients/ListClient';
import UpdateClient from './controllers/Clients/UpdateClient';
import DeleteClient from './controllers/Clients/DeleteClient';

const routes = express.Router();

routes.post('/api/clients', CreateClient.handle);
routes.get('/api/clients', ListClients.handle);
routes.get('/api/client/:d', ListClient.handle);
routes.get('/api/clients/:d', UpdateClient.handle);
routes.get('/api/clients/:d', DeleteClient.handle);

export default routes;