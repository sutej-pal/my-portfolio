import {httpPost} from "../../services/http.service";

interface SaveContactRequest {
    name: string,
    email: string,
    message: string,
}

interface SaveContactResponse {
    message: string
}

export async function saveContactRequest(payload: SaveContactRequest) {
    try {
        return await httpPost<SaveContactResponse>("contact", payload);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

