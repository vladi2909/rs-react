import './CardForm.css';

export const CardForm = (props) => {
  console.log(props)
  const item = props.item.data;
  return (
    <div className="card-from">
      <p>
        name:
        <span>{item.firstName}</span>
      </p>
      <p>
        surname:
        <span>{item.lastName}</span>
      </p>
      <p>
        birthday:
        <span>{item.birthday}</span>
      </p>
      <p>
        country:
        <span>{item.country}</span>
      </p>
      <p>
        agree:
        <span>{ item.agree ? "yes" : "no"}</span>
      </p>
    </div>
  );
};