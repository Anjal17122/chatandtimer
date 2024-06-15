import { get, post } from "./CommonRequest"



export const saveMessage = (body)=>{
    return post("/out/messages",body);
}

export const getAllMessages = ()=>{
    return get("/out/messages");
}

export const increaseCount = ()=>{
    return get("/out/messages/count");
}





