import './Card.css';

export const Card = ({ character, setActive, characterActive }) => {

  const openPopup = () => {
    setActive(true);
    characterActive(character);
  }
  
  return (
    <div className="card" onClick={openPopup}>
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