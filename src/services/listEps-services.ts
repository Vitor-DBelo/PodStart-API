import { repositoryPodcast } from "../repo/podcast-repo";


export const serviceListEps = async () =>{
    const data = repositoryPodcast();

    return data
}