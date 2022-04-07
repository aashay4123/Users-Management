import React from "react";
import Grid from "@mui/material/Grid";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>Layout</h1>
      </Grid>
      {children}
    </Grid>
  );
};
export default Layout;
