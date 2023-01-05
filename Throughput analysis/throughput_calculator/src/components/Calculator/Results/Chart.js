import { useMediaQuery } from "@mui/material";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Chart({ results }) {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <BarChart
      width={matches ? 460 : 280}
      height={300}
      data={results}
      margin={{
        top: 5,
        right: 0,
        left: 0,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="result" fill="#ed4b82" />
    </BarChart>
  );
}

export default Chart;
