import * as React from 'react';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { Species } from '../../../types';

export const SortBySpecies = (props) => {
  const handleChange = (event) => {
    props.setSpecies(event.target.value);
    props.sortByGetSpecies(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-simple-select-label">species</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.species}
        label="status"
        onChange={handleChange}
      >
        <MenuItem value={Species.all}>{Species.all}</MenuItem>
        <MenuItem value={Species.Human}>{Species.Human}</MenuItem>
        <MenuItem value={Species.Alien}>{Species.Alien}</MenuItem>
      </Select>
    </FormControl>
  );
}