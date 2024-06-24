import { Logins } from "../../routes/types";
import api from "./apiLogin";

export const getAllLogins = async () =>{
    const { data } = await api.get("/Login");
    return data
}

export const postNewLogin = async (newLogin: {}) =>{
    const { data } = await api.post("/Login",newLogin);
    return data
}
