import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import {
  ComposedChart,
  Bar,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { data } from "./data";
function Results({ results }) {
  return (
    <Card>
      <CardContent>
        <Typography>Throughput in Mbps:</Typography>
        <Typography variant="h5">{results ? results : ""}</Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Mbps
        </Typography>
      </CardContent>
      <ComposedChart
        width={500}
        height={200}
        data={data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <YAxis label={{ value: "Index", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#1976d2" />
      </ComposedChart>
      <CardActions>
        <Button>Save results</Button>
      </CardActions>
    </Card>
  );
}

export default Results;
