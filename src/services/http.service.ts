import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
        "Content-type": "application/json"
    }
})

function getEndPointUrl(url: string) {
    if (import.meta.env.DEV) {
        return import.meta.env.VITE_LOCAL_API_ENDPOINT + url
    } else {
        return import.meta.env.VITE_PROD_API_ENDPOINT + url;
    }
}

async function httpGet<T>(url: string, headers?: any, params?: any): Promise<T> {
    const endpoint = getEndPointUrl(url);
    return (await http.get<T>(endpoint, {
        params: params
    })).data;
}

async function httpPost<T>(url: string, payload: any, headers?: any): Promise<T> {
    const endpoint = getEndPointUrl(url);
    return (await http.post<T>(endpoint, payload)).data;
}

export {
    httpGet,
    httpPost,
}
