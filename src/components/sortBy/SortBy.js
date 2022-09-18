import { SortByStatus } from './SortByStatus/SortByStatus';
import { SortBySpecies } from './SortBySpecies/SortBySpecies';
import { PATH_API } from '../../service/globalSettings';
import { Api } from '../../service/api';
import { useState } from 'react';

export const SortBy = (props) => {
  let [status, setStatus] = useState('');
  let [species, setSpecies] = useState('');

  const sortByGetStatus = async (status) => {
    status = status === 'all' ? '' : status;
    species = species === 'all' ? '' : species;
    try {
      const res = await Api.get(`${PATH_API}/?name=${props.input}&status=${status}&species=${species}`);
      props.onSortStatus(res.results);
    } catch(e) {
      console.error(e);
    }
  }

  const sortByGetSpecies = async (species) => {
    species = species === 'all' ? '' : species;
    status = status === 'all' ? '' : status;
    try {
      const res = await Api.get(`${PATH_API}/?name=${props.input}&species=${species}&status=${status}`);
      props.onSortStatus(res.results);
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <div style={sortBy}>
      <SortByStatus
        sortByGetStatus={sortByGetStatus}
        setStatus={setStatus}
        status={status}
      />
      <SortBySpecies
        sortByGetSpecies={sortByGetSpecies}
        setSpecies={setSpecies}
        species={species}
      />
    </div>
  );
}

const sortBy = {
  maxWidth: '67%',
  margin: '0 auto',
  display: 'flex',
}