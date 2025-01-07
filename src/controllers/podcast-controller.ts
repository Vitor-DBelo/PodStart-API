import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEps} from '../services/listEps-services';
import { filteEps } from "../services/filterEps-services";
import { DTOTrans } from "../models/DTOTtras";

export const getListEps = async (request:IncomingMessage, response:ServerResponse) =>{
    const content:DTOTrans = await serviceListEps();

    response.writeHead(content.StatusCode,{'content-Type': 'application/json'});
    response.write(JSON.stringify(content.body));
    response.end();
};



export const getFilterEps = async(request:IncomingMessage,response: ServerResponse) => {
    
    const content: DTOTrans = await filteEps(request.url);
    
    
    response.writeHead(content.StatusCode, {"Content-Type":"application/json"});
    response.write(JSON.stringify(content.body));
    response.end();
};