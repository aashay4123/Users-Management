import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Layout from "./Layout";

export const UserList = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const [columnSearchKey, setColumnSearchKey] = useState("name");

  const handleRowClick = () => {
    history.push(`/admin/address/add-enterprise`);
  };

  return (
    <Layout>
      <h1>User List</h1>
    </Layout>
  );
};
