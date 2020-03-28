const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfileController = require('./controllers/ProfileController');
const SessionsController = require('./controllers/SessionController');

const routes = express.Router();

routes.get('/ongs', OngController.List);
routes.post('/ongs', OngController.Create);

routes.get('/incidents', IncidentsController.List);
routes.post('/incidents', IncidentsController.Create);
routes.delete('/incidents/:id', IncidentsController.Delete);

routes.get('/profile', ProfileController.ListIncidentsByOng);

routes.post('/sessions', SessionsController.Create);

module.exports = routes;