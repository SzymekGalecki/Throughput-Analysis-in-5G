import React from "react";
import {
  TextField,
  Grid,
  InputAdornment,
  Button,
  MenuItem,
} from "@mui/material";
import {
  modulationOrderSelectOptions,
  numberOfLayersSelectOptions,
  scalingFactorSelectOptions,
  muSelectOptions,
  overheadSelectOptions,
} from "./formSelectOptions";
import { MathComponent } from "mathjax-react";

function Form({ inputValues, setInputValues, calculateThroughput }) {
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
              {`${option.value} for ${option.name}`}
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
              {`${option.value} for ${option.name}`}
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
              {`${option.value} for ${option.name}`}
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
