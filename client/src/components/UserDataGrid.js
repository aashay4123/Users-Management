import { DataGrid } from "@mui/x-data-grid";

import React from "react";

export const UsersDataGrid = (
  userList,
  columns,
  onRowClick,
  //   columnSearchKey,
  //   search,
) => {
  return (
    <div>
      <DataGrid
        rows={userList}
        columns={columns}
        loading={userList.length > 0 ? false : true}
        checkboxSelection={false}
        onRowClick={(params) => onRowClick(params)}
        // filterModel={{
        //   items: [
        //     {
        //       columnField: columnSearchKey,
        //       operatorValue: "contains",
        //       value: search,
        //     },
        //   ],
        // }}
      />
    </div>
  );
};
