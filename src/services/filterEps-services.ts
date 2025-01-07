import { json } from "node:stream/consumers";
import { repositoryPodcast } from "../repo/podcast-repo";


export const filteEps= async (podcastName: string): Promise<string> => {
    const data = await repositoryPodcast(podcastName);
    return JSON.stringify(data);
}