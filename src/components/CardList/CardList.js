import './CardList.css';
import { testData } from '../../TestData';
import { Card } from '../Card/Card';

export const CardList = () => {
  
  return (
    <div className="cardList">
      {
        testData.map(item => <Card key={item.id} item={item} />)
      }
    </div>
  );
};