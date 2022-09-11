import { useState } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/input";

export const Home = () => {
  const [input, setInput] = useState('');

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
    </div>
  );
};

const search = {
  display: 'flex',
  justifyContent: 'center',
};