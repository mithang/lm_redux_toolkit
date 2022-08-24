import axiosAPI from './../AxiosAPI';
import axios from 'axios';

export const getNotesList = () => {
    // return axiosAPI.get("/notes");
    return axios.get("https://crudcrud.com/api/7a73f1d79b614a4889067e20ed81a2cc/notes");
}

export const editANotesByID = (noteID, params) => {
    //return axiosAPI.put(`/notes/${noteID}`, params);
    return axiosAPI.put(`https://crudcrud.com/api/7a73f1d79b614a4889067e20ed81a2cc/notes/${noteID}`, params);
}

export const addANewNote = (params) => {
    //return axiosAPI.post("/notes", params);
    return axios.post("https://crudcrud.com/api/7a73f1d79b614a4889067e20ed81a2cc/notes", params);
}

export const deleteANote = (noteID) => {
    // return axiosAPI.delete(`/notes/${noteID}`);
    return axios.delete(`https://crudcrud.com/api/7a73f1d79b614a4889067e20ed81a2cc/notes/${noteID}`);
}