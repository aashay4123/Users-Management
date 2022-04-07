import React from "react";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid
          container
          padding="24px"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={8}>
            <Typography variant="h4" textAlign="center" color="text.primary">
              {"User List"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {children}
    </Grid>
  );
};
export default Layout;
