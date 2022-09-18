import './Card.css';

export const Card = (props) => {
  const character = props.character;
  return (
    <div className="card">
      <img src={character.image} />
      <div className="card-content">
        <p>{character.name}</p>
        <p>{character.location.name}</p>
        <div className='price-block'>
          <span>{character.created}</span>
        </div>
      </div>
    </div>
  );
};