import { ADD_ITEM, DELETE_ITEM, GET_REQUEST, SET_USERS } from "../reducer/constants";

export const addItem = (payload) => ({
    type: ADD_ITEM,
    payload,
});

export const deleteItem = () => ({
    type: DELETE_ITEM,
});

export const getRequest = () => ({
    type: GET_REQUEST,
});

export const setUsers = (payload) => ({
    type: SET_USERS,
    payload,
});
