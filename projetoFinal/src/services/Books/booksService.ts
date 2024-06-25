import api from "./apiBook";

export const getAllBooks = async() => {
    const { data } = await api.get("/livros");
    return data;
};
export const postNewBook = async (newBook: {}) =>{
    const { data } = await api.post("/livros",newBook);
    return data
}
export const updateLivro = async (livroId: {} ,livroData: {}) => {
      const { data } = await api.put(`/livros/${livroId}`, livroData);
      return data
  };


