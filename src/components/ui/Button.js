import { Color } from '../../styleGuide/Colors';

export const Button = (props) => {
  let type;
  switch(props.variant) {
    case "contained":
      type = contained;
      break;
    case "text":
      type = text;
      break;
    case "outlined":
      type = outlined;
      break;
  }

  return (
    <button style={{...button, ...type}}>{props.title}</button>
  );
};

const button = {
  minWidth: '140px',
  padding: '14px 16px',
  marginLeft: '20px',
  borderRadius: '4px',
  fontWeight: 500,
  fontSize: '0.875rem',
  color: Color.white,
  cursor: 'pointer',
  border: 'none',
};

const contained = {
  backgroundColor: Color.blue,
};

const text = {
  backgroundColor: 'transparent'
}

const outlined = {
  backgroundColor: 'transparent',
  color: Color.blue,
  border: '1px solid',
  borderColor: Color.blue
};