import React from "react";
import Chart from "./Chart";
import { Box, Card, CardContent, Typography } from "@mui/material";
function Results({ results }) {
  return (
    <Card>
      <CardContent>
        <Typography>Throughput in Mbps:</Typography>
        <Typography variant="h5">
          {results.length === 0 ? " " : results[results.length - 1].result}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mbps
        </Typography>
      </CardContent>
      <Box sx={{ mb: 4 }}>
        <Chart results={results} />
      </Box>
    </Card>
  );
}

export default Results;
