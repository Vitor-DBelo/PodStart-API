import fs from "fs";
import path from "path";
import { podcastModuls } from "../models/podcast-models";




const pathData = path.resolve(__dirname, "./podcast.json");

export const repositoryPodcast = async (podcastName?: string): Promise<podcastModuls[]>=> {
    const rawData = fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if(podcastName){
        jsonFile = jsonFile.filter((podcast: podcastModuls) => 
            podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
        )
    };

    return jsonFile;
};
