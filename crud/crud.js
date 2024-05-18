import axios from "axios";

export const SendImage = (data) => {
    var config = {
        method: 'post',
        url: `http://192.168.1.35:5001/analyze`,
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
        url: `http://192.168.1.35:5001/analyzeWithAll`,
        headers: {
            "Content-Type": "application/json"
        },
        data: { data: data }
    };
    return axios(config)
}