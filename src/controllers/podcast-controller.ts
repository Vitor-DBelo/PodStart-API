import {IncomingMessage,request,ServerResponse} from "http";
import {serviceListEps} from '../services/listEps-services';
import { filteEps } from "../services/filterEps-services";
import { StatusCode } from "../utils/http-statusCode";
import { FilterPodcastModel } from "../models/response-podecast-moduls";

export const getListEps = async (request:IncomingMessage, response:ServerResponse) =>{
    response.writeHead(Number(StatusCode.Ok),{'content-Type': 'application/json'});

    const content = await serviceListEps();

    response.end(JSON.stringify(content));
};



export const getFilterEps = async(request:IncomingMessage,response: ServerResponse) => {
    
    const content: FilterPodcastModel = await filteEps(request.url);
    
    
    response.writeHead(content.StatusCode, {"Content-Type":"application/json"});
    

    response.end(JSON.stringify(content.body));
};