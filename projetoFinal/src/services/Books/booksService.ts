import api from "./apiBook";

export const getAllBooks = async() => {
    const { data } = await api.get("/livros");
    return data;
};
