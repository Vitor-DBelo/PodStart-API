import { repositoryPodcast } from "../repo/podcast-repo";
import { DTOTrans} from "../models/DTOTtras";
import { StatusCode } from "../utils/http-statusCode";

export const filteEps = async (podcastName: string | undefined): Promise<DTOTrans> => {
    let responseFormat: DTOTrans = {
        StatusCode: 0,
        body: [],
    };
    
    const queryString = podcastName?.split('?p=')[1] || '';
    const data = await repositoryPodcast(queryString);
    
    responseFormat.StatusCode = data.length !== 0 ? Number(StatusCode.Ok) : Number(StatusCode.NoContent);

   
    responseFormat.body = data;

    return responseFormat;
}