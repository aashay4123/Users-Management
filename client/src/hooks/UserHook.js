import { useEffect, useState } from "react";
import { getUserById, getUsers } from "../service/userService";

export const useGetUserData = (id) => {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getUserById(id);
      setUserDetails(data);
    };
    loadData();
  });

  return {
    userDetails,
  };
};

export const useGetUserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getUsers();
      setUserList(data);
    };
    loadData();
  });

  return {
    userList,
  };
};
