export const Input = (props) => {
  
  return (
    <input
      value={props.input}
      style={input}
      {
        ...props.register('inputSearch', {
        onChange: (e) => {props.inputChange(e.target.value)},
        required: 'required field',
        })
      }
      placeholder={props.placeholder}
    />
  );
};

const input = {
  padding: '6px 16px',
  border: 'none',
  borderRadius: '4px',
  outline: 'none',
};