import axios from "axios";
import { baseUrl } from "../data/staticDatas";

export const SendImage = (data) => {
    var config = {
        method: 'post',
        url: `${baseUrl}/analyze`,
        headers: {
            "Content-Type": "application/json"
        },
        data: { data: data }
    };
    return axios(config)
}

export const GetResultsWithAllLibraries = (data) => {
    var config = {
        method: 'post',
        url: `${baseUrl}/analyzeWithAll`,
        headers: {
            "Content-Type": "application/json"
        },
        data: { data: data }
    };
    return axios(config)
}