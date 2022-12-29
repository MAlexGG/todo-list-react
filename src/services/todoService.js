import axios from "axios";

export const todoService = () => {

    const url = "http://localhost:5000/todo";

    const get = async () => {
        const res = await axios.get(url);
        return res;
    };

    const create = async (data) => {
        const res = await axios.post(url, data);
        return res;
    };

    const destroy = async (id) => {
        const res = await axios.delete(`${url}/${id}`);
        return res;
    };

    const update = async (data) => {
        const res = await axios.put(`${url}/${data.id}`, data);
        return res;
    };
    
    return {
        get,
        create,
        destroy,
        update,
        url
    }

}