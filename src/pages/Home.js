import { useEffect, useState, useRef } from "react";
import { Button } from "../components/ui/Button";
import { Input } from "../components/ui/InputSearch";
import { CardList } from "../components/CardList/CardList";
import { useForm } from "react-hook-form";

export const Home = () => {
  const [input, setInput] = useState('');
  const val = useRef();
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
  } = useForm({ defaultValues: { inputSearch: input } });

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

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <div style={searchBlock}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            input={input}
            register={register}
            errors={errors}
            inputChange={inputChange}
            placeholder="Search..." 
          />
          <Button variant="contained" title="search" />
        </form>
      </div>
        <CardList />
    </div>
  );
};

const searchBlock = {
  display: 'flex',
  maxWidth: '60%',
  margin: '0 auto',
};

const search = {
  with: '100%',
}