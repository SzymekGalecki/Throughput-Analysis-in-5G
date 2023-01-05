import React from "react";
import Form from "./Form/Form";
import { Grid, Paper, Box } from "@mui/material";
function Main() {
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Form />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={5}>Test</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
