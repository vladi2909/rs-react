export const Input = (props) => {
  return (
    <input
      value={props.value}
      onChange={(e) => props.inputChange(e.target.value)}
      style={input}
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