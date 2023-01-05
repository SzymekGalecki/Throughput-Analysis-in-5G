import React from "react";
import Chart from "./Chart";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
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
      <Chart results={results} />
      <CardActions>
        <Button>Save results</Button>
      </CardActions>
    </Card>
  );
}

export default Results;
