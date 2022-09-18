import * as React from 'react';
import './SortByStatus.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { Status } from '../../../types';

export const SortByStatus = (props) => {
  const handleChange = (event) => {
    props.setStatus(event.target.value);
    props.sortByGetStatus(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">status</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.status}
        label="status"
        onChange={handleChange}
      >
        <MenuItem value={Status.all}>{Status.all}</MenuItem>
        <MenuItem value={Status.alive}>{Status.alive}</MenuItem>
        <MenuItem value={Status.dead}>{Status.dead}</MenuItem>
        <MenuItem value={Status.unknown}>{Status.unknown}</MenuItem>
      </Select>
    </FormControl>
  );
}