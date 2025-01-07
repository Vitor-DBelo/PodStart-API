import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEps} from '../services/listEps-services';
import { filteEps } from "../services/filterEps-services";

export const getListEps = async (request:IncomingMessage, response:ServerResponse) =>{
    response.writeHead(200,{'content-Type': 'application/json'});

    const content = await serviceListEps();

    response.end(JSON.stringify(content));
};



export const getFilterEps = async(request:IncomingMessage,response: ServerResponse) => {
    
    //http://localhost:3636/api/eps?p=NomeDoPodcast
    const queryString = request.url?.split('?p=')[1] || '';

    const decodedQueryString = decodeURIComponent(queryString);
    
    response.writeHead(200, {"Content-Type":"application/json"});
    
    const content = await filteEps(decodedQueryString);

    response.end(content);
};