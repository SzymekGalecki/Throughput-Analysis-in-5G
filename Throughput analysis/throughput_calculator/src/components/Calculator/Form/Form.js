import React from "react";
import { TextField, Grid, InputAdornment, Button } from "@mui/material";

function Form() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(J)</InputAdornment>
            ),
          }}
          label="Component Carriers"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(Q)</InputAdornment>
            ),
          }}
          label="Modulation Order"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(V)</InputAdornment>
            ),
          }}
          label="Number of layers"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(f)</InputAdornment>
            ),
          }}
          label="Scaling Factor"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(mu)</InputAdornment>
            ),
          }}
          label="NR numerology"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(N)</InputAdornment>
            ),
          }}
          label="Number of allocated PRBs "
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">(OH)</InputAdornment>
            ),
          }}
          fullWidth
          label="Overhead"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
}

export default Form;
