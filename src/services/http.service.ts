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
    const endpoint = url.startsWith("http") ? url : import.meta.env.VITE_API_ENDPOINT + url;
    return (await http.get<T>(endpoint, {
        params: params
    })).data;
}

async function httpPost<T>(url: string, payload: AxiosData, headers?: AxiosHeaders): Promise<T> {
    const endpoint = url.startsWith("http") ? url : import.meta.env.VITE_API_ENDPOINT + url;
    return (await http.post<T>(endpoint, payload, {
        headers
    })).data;
}

export {
    httpGet,
    httpPost,
}
