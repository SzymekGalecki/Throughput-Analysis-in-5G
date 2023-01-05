import React from "react";
import Form from "./Form/Form";
import { Grid, Paper, Box, Typography, useMediaQuery } from "@mui/material";
import { MathComponent } from "mathjax-react";

function Main() {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <Paper elevation={5}>
            <Box sx={{ p: 4 }}>
              <Typography sx={{ mb: 3 }} variant="h6">
                5G NR Throughput Calculator
              </Typography>
              {matches && (
                <Box sx={{ mb: 4 }}>
                  <MathComponent
                    tex={String.raw`10^{-6}\cdot\sum^{J}_{j=1}(v^{(j)}_{layers}{\cdot} Q^{(j)}_{m}{\cdot}f^{(j)}{\cdot}R_{max}{\cdot}\frac{N^{BW(j),\mu}_{PRB}{\cdot}12}{T^{\mu}_s}{\cdot}(1-OH^{(j)}))`}
                  />
                </Box>
              )}
              <Form />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={5}>
            <Box sx={{ p: 4 }}></Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
