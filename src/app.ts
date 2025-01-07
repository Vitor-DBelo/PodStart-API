import * as http from 'http';

import {getFilterEps, getListEps} from './controllers/podcast-controller';
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    
    const [baseURL, queryString] = request.url?.split('?') ?? ['','']
    
    if(request.method === HttpMethod.GET && baseURL === Routes.LIST){
        await getListEps(request,response);
    }
    if(request.method === HttpMethod.GET && baseURL === Routes.EPSFILD){
        await getFilterEps(request,response);
    }
};