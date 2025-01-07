import { DTOTrans } from "../models/DTOTtras";
import { repositoryPodcast } from "../repo/podcast-repo";
import { StatusCode } from "../utils/http-statusCode";


export const serviceListEps = async () =>{

    let responseFormat: DTOTrans = {
        StatusCode: 0,
        body: [],
    };

    const data = await repositoryPodcast();

    responseFormat.StatusCode = data.length !== 0 ? Number(StatusCode.Ok) : Number(StatusCode.NoContent);

   responseFormat.body = data;

    return responseFormat
}