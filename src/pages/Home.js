import { useEffect, useState, useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/InputSearch";
import { CardList } from "../components/CardList/CardList";

export const Home = () => {
  const [input, setInput] = useState('');
  const val = useRef();

  useEffect(() => {
    const inputSearch = localStorage.getItem('inputSearch');
    setInput(inputSearch);
  }, [Home]);

  useEffect(() => {
    val.current = input;
  }, [input]);

  useEffect(() => {
    return () => {
      localStorage.setItem('inputSearch', val.current);
    }
  }, []);

  const inputChange = (e) => {
    setInput(e);
  };

  return (
    <div>
      <div style={search}>
        <Input
          value={input}
          inputChange={inputChange}
          placeholder="Search..."
        />
        <Button variant="contained" title="search" />
      </div>
        <CardList />
    </div>
  );
};

const search = {
  display: 'flex',
  justifyContent: 'center',
};