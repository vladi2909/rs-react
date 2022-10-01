import './Pagination.css';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import { Api } from '../../service/api';
import { PATH_API } from '../../service/globalSettings';

export const Paginations = ({ setCharacter, numOfPage }) => {
  const [page, setPage] = useState(1);

  const handleChange = async(event, value) => {
    setPage(value);
    try {
      const res = await Api.get(`${PATH_API}/?page=${value}`);
      setCharacter(res.results);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className='pagination-wrap'>
      <Pagination
        count={numOfPage}
        shape="rounded"
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </div>
  );
};