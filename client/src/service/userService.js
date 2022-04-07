import axios from "axios";

export const getUsers = async () => {
  try {
    return await axios.get(`/api/user`);
  } catch (err) {
    console.log("error in userService", err);
    return err.response;
  }
};

export const getUserById = async (id) => {
  try {
    return await axios.get(`/api/user/${id}`);
  } catch (err) {
    console.log("error in userService", err);
    return err.response;
  }
};

export const createUser = async (body) => {
  try {
    return await axios.post(`/api/user`, body);
  } catch (err) {
    console.log("error in userService", err);
    return err.response;
  }
};

export const updateUser = async (id, body) => {
  try {
    return await axios.patch(`/api/user/${id}`, body);
  } catch (err) {
    console.log("error in userService", err);
    return err.response;
  }
};

export const deleteUser = async (id, body) => {
  try {
    return await axios.delete(`/api/user/${id}`, body);
  } catch (err) {
    console.log("error in userService", err);
    return err.response;
  }
};
