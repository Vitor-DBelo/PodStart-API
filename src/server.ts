import * as http from 'http';
import {getFilterEps, getListEps} from './controllers/podcast-controller';

const server = http.createServer(
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        //queryString
        
        const [baseURL, queryString] = request.url?.split('?') ?? ['','']
        
        if(request.method === 'GET' && baseURL === '/api/list'){
            await getListEps(request,response);
        }
        if(request.method === 'GET' && baseURL === '/api/eps'){
            await getFilterEps(request,response);
        }
    }
);

const port = process.env.PORT

server.listen( port, () => {
    console.log('Servidor iniciado na porta ' + port);
});
