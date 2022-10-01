import './CardList.css';
import { Card } from '../Card/Card';

export const CardList = ({ characters, setActive, characterActive }) => {
  return (
    <div className="cardList">
      {
        characters
          ? characters.map(
              character =>
                <Card
                  key={character.id}
                  character={character}
                  setActive={setActive}
                  characterActive={characterActive}
                />
            )
          : <div>There is nothing here</div>
      }
    </div>
  );
};