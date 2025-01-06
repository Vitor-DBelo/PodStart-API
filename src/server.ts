import * as http from 'http';
import {getListEps} from './controllers/podcast-controller';

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        if(request.method === 'GET'){
            await getListEps(request,response);
        }

    }
);

const port = process.env.PORT

server.listen( port, () => {
    console.log('Servidor iniciado na porta ' + port);
});
