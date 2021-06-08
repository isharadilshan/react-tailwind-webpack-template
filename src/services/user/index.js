import {Axios} from '../axios-client';
import {USER_ENDPOINT} from '../endpoints';

export const fetchAllUsers = async () => {
  return Axios.get(`${USER_ENDPOINT}`);
};

export const fetchUser = async (id) => {
  return Axios.get(`${USER_ENDPOINT}/${id}`);
};

export const deleteUser = async (id) => {
  return Axios.delete(`${USER_ENDPOINT}/${id}`);
};

export const createUser = async (data) => {
  return Axios.post(`${USER_ENDPOINT}`, data);
};

export const updateUser = async (id, data) => {
  return Axios.put(`${USER_ENDPOINT}/${id}`, data);
};

export const uploadUserImages = async (id, data) => {
  return Axios.post(`${USER_ENDPOINT}/${id}/images`, data);
};
