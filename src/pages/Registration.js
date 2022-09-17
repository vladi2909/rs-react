import { useState } from "react";
import { CardForm } from "../components/CardForm/CardForm";
import { Form } from "../components/Form/Form";

export const Registration = () => {
  const [formValues, setFormValues] = useState([]);
  console.log(formValues);
  return (
    <>
      <Form setFormValues={setFormValues} />
      <main>
        {
          formValues.map((item, indx) => {
            return <CardForm item={item} key={indx} />
          })
        }
      </main>
    </>
  );
};