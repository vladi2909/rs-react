import './CardList.css';
import { Card } from '../Card/Card';

export const CardList = (props) => {
  const characters = props.characters;
  return (
    <div className="cardList">
      {
        characters
          ? characters.map(character => <Card key={character.id} character={character} />)
          : <div>There is nothing here</div>
      }
    </div>
  );
};