import {IncomingMessage,request,ServerResponse} from "http";

export const getListEps = async (request:IncomingMessage, response:ServerResponse) =>{
    response.writeHead(200,{'content-Type': 'application/json'});
    response.end(JSON.stringify([
        {
            podcastName: 'Inteligência Ltda',
            epsodio: 'TOKUSATSU: HERÓIS JAPONESES DO JASPION, CHANGEMAN E JIRAYA - Inteligência Ltda. Podcast #1067',
            idVideo: 'Ct3oyXuM9TE',
            type: 'video',
            imagemCover: 'https://i.ytimg.com/vi/Ct3oyXuM9TE/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA3C2b6ktV5FoDgZFi27KQX5_gXiw',
            category:['ciências','programação','humor','cultura nerd'],   
        },
        {
            podcastName: 'Inteligência Ltda',
            epsodio: 'DA INVENÇÃO DO COMPUTADOR À INTELIGÊNCIA ARTIFICIAL - FÁBIO AKITA - Inteligência Ltda. Podcast #1228',
            idVideo: 'jVxzpiDJ9Qk',
            type: 'live',
            imagemCover: 'https://i.ytimg.com/vi/jVxzpiDJ9Qk/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBbscebUoeAggbCiB1K8dkJquQFYA',
            category:['ciências','programação','humor','cultura nerd'],   
        }
    ]))
}