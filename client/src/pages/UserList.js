import { Grid } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { UsersDataGrid } from "../components/UserDataGrid";
import { userDatagridConstants } from "../constants/userDataGridConstants";
import { useGetUserList } from "../hooks/UserHook";
import Layout from "./Layout";

export const UserList = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [columnSearchKey, setColumnSearchKey] = useState("name");
  const { userList } = useGetUserList();
  const handleRowClick = () => {
    history.push(`/user-details`);
  };

  return (
    <Layout>
      <UsersDataGrid
        userList={userList}
        columns={userDatagridConstants}
        onRowClick={handleRowClick}
      />
    </Layout>
  );
};
