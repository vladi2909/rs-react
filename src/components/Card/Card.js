import './Card.css';

export const Card = (props) => {
  const card = props.item;
  return (
    <div className="card">
      <img src={card.linkImg} />
      <div className="card-content">
        <p>{card.title}</p>
        <span>{card.article}</span>
        <div className='price-block'>
          <span>{card.price}</span>
          <span className='old-price'>{card.oldPrice}</span>
        </div>
      </div>
    </div>
  );
};