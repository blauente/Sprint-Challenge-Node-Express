const express = require('express');

const server = express();

const actionRoutes = require('./actions/actionRoutes');
const projectRoutes = require('./projects/projectRoutes');

const configMiddleware = require('./config/middleware');

configMiddleware(server);

function errorHandler(err, req, res, next) {
    console.error('error', err);
    switch(err.status) {
        case 400:
            res.status(400).json({errorMessage: 'Please provide the required information.'});
            break;
        
        case 404:
            res.status(404).json({errorMessage: 'The requested resource could not be found.'});
            break;

        default:
            res.status(500).json({errorMessage: 'There was an error performing the required operation.'});
            break;

    }
}

server.use('/api/actions', actionRoutes);
server.use('/api/projects', projectRoutes);

server.use(errorHandler);

server.listen(7001, () => console.log('\n=== Server listening on port 7001 ===\n'));