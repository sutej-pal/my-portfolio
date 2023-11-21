import axios, {AxiosHeaders} from "axios";

interface AxiosParams {
    [key: string]: number | string
}

interface AxiosData {
    [key: string]: number | string
}

const http = axios.create({
    headers: {
        "Content-type": "application/json"
    }
})


async function httpGet<T>(url: string, headers?: AxiosHeaders, params?: AxiosParams): Promise<T> {
    const endpoint = url.startsWith("http") ? url : process.env.REACT_APP_API_ENDPOINT + url;
    return (await http.get<T>(endpoint, {
        params: params
    })).data;
}

async function httpPost<T>(url: string, payload: unknown, headers?: AxiosHeaders): Promise<T> {
    debugger
    const endpoint = url.startsWith("http") ? url : process.env.REACT_APP_API_ENDPOINT + url;
    return (await http.post<T>(endpoint, payload, { 
        headers
    })).data;
}

export {
    httpGet,
    httpPost,
}
