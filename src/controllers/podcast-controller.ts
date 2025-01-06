import {IncomingMessage,ServerResponse} from "http";
import {serviceListEps} from '../services/listEps-services';

export const getListEps = async (request:IncomingMessage, response:ServerResponse) =>{
    response.writeHead(200,{'content-Type': 'application/json'});

    const content = await serviceListEps();

    response.end(
        JSON.stringify(content)
    );
}