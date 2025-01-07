import { repositoryPodcast } from "../repo/podcast-repo";
import { FilterPodcastModel} from "../models/response-podecast-moduls";
import { StatusCode } from "../utils/http-statusCode";

export const filteEps = async (podcastName: string | undefined): Promise<FilterPodcastModel> => {
    let responseFormat: FilterPodcastModel = {
        StatusCode: 0,
        body: [],
    };
    
    const queryString = podcastName?.split('?p=')[1] || '';
    const data = await repositoryPodcast(queryString);
    
    responseFormat.StatusCode = data.length !== 0 ? Number(StatusCode.Ok) : Number(StatusCode.NoContent);

   
    responseFormat.body = data;

    return responseFormat;
}