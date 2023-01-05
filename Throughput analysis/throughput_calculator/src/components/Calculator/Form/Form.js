import React from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  Button,
  MenuItem,
} from "@mui/material";
import { MathComponent } from "mathjax-react";

function Form({ inputValues, setInputValues, calculateThroughput }) {
  const modulationOrderSelectOptions = [
    {
      value: 2,
    },
    {
      value: 4,
    },
    {
      value: 6,
    },
    {
      value: 8,
    },
  ];
  const numberOfLayersSelectOptions = [
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 4,
    },
    {
      value: 8,
    },
  ];
  const scalingFactorSelectOptions = [
    {
      value: 0.4,
    },
    {
      value: 0.75,
    },
    {
      value: 0.8,
    },
    {
      value: 1,
    },
  ];
  const muSelectOptions = [
    {
      value: 0,
    },
    {
      value: 1,
    },
    {
      value: 2,
    },
    {
      value: 3,
    },
    {
      value: 4,
    },
  ];
  const overheadSelectOptions = [
    {
      value: 0.08,
    },
    {
      value: 0.1,
    },
    {
      value: 0.14,
    },
    {
      value: 0.18,
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6}>
        <TextField
          onChange={(event) =>
            setInputValues({
              ...inputValues,
              componentCarriers: parseInt(event.target.value),
            })
          }
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`J`} />
              </InputAdornment>
            ),
          }}
          label="Component Carriers"
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          value={inputValues.modulationOrder}
          onChange={(event) =>
            setInputValues({
              ...inputValues,
              modulationOrder: event.target.value,
            })
          }
          select
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`Q^{(j)}_{m}`} />
              </InputAdornment>
            ),
          }}
          label="Modulation Order"
          type="number"
          variant="outlined"
        >
          {modulationOrderSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          value={inputValues.numberOfLayers}
          onChange={(event) =>
            setInputValues({
              ...inputValues,
              numberOfLayers: event.target.value,
            })
          }
          select
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`V^{(j)}_{layers}`} />
              </InputAdornment>
            ),
          }}
          label="Number of layers"
          type="number"
          variant="outlined"
        >
          {numberOfLayersSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          value={inputValues.scalingFactor}
          onChange={(event) =>
            setInputValues({
              ...inputValues,
              scalingFactor: event.target.value,
            })
          }
          select
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`f^{j}`} />
              </InputAdornment>
            ),
          }}
          label="Scaling Factor"
          type="number"
          variant="outlined"
        >
          {scalingFactorSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          value={inputValues.mu}
          onChange={(event) =>
            setInputValues({ ...inputValues, mu: event.target.value })
          }
          select
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`\mu`} />
              </InputAdornment>
            ),
          }}
          label="NR numerology"
          type="number"
          variant="outlined"
        >
          {muSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={6} sm={6}>
        <TextField
          value={inputValues.overHead}
          onChange={(event) =>
            setInputValues({ ...inputValues, overHead: event.target.value })
          }
          select
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`OH^{(j)}`} />
              </InputAdornment>
            ),
          }}
          label="Overhead"
          type="number"
          variant="outlined"
        >
          {overheadSelectOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(event) =>
            setInputValues({
              ...inputValues,
              numberOfAllocatedPRBs: parseInt(event.target.value),
            })
          }
          autoComplete="off"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MathComponent tex={String.raw`N^{BW(j),\mu}`} />
              </InputAdornment>
            ),
          }}
          label="Number of allocated PRBs "
          type="number"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          fullWidth
          variant="contained"
          onClick={() => calculateThroughput()}
        >
          Calculate
        </Button>
      </Grid>
    </Grid>
  );
}

export default Form;
