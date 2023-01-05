import React, { useState } from "react";
import Form from "./Form/Form";
import Results from "./Results/Results";
import { Grid, Paper, Box, Typography, useMediaQuery } from "@mui/material";
import { MathComponent } from "mathjax-react";
import { format } from "date-fns";

function Main() {
  const matches = useMediaQuery("(min-width:600px)");
  const [inputValues, setInputValues] = useState({
    componentCarriers: "",
    numberOfLayers: "",
    modulationOrder: "",
    scalingFactor: "",
    numberOfAllocatedPRBs: "",
    mu: "",
    overHead: "",
  });
  const [results, setResults] = useState([]);

  const calculateThroughput = () => {
    let Rmax = 0.92578125;
    let symbolDuration = Math.pow(10, -3) / (14 * Math.pow(2, inputValues.mu));
    const result =
      Math.pow(10, -6) *
      (inputValues.numberOfLayers *
        inputValues.modulationOrder *
        inputValues.scalingFactor *
        Rmax *
        ((inputValues.numberOfAllocatedPRBs * 12) / symbolDuration)) *
      (1 - inputValues.overHead);
    return setResults((current) => [
      ...current,
      { name: format(new Date(), "H:m:ss"), result: result },
    ]);
  };

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
              <Form
                inputValues={inputValues}
                setInputValues={setInputValues}
                calculateThroughput={calculateThroughput}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Paper elevation={4}>
            <Results results={results} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
