import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';

export const Modal = ({ setActive, characterActive }) => {
  console.log(characterActive);

  const closePopup = () => {
    setActive(false);
  };

  return (
    <div className='modal'>
      <div className='overlay' onClick={closePopup}></div>
      <div className='modal__content'>
        <img src={characterActive.image} />
        <p>
          <span className='title'>name: </span>
          {characterActive.name}
        </p>
        <p>
          <span className='title'>location: </span>
          {characterActive.location.name}
        </p>
        <p>
          <span className='title'>created: </span>
          {characterActive.created}
        </p>
        <p>
          <span className='title'>species: </span>
          {characterActive.species}
        </p>
        <p>
          <span className='title'>gender: </span>
          {characterActive.gender}
        </p>
      </div>
      <div className='modal__icon'>
        <CloseIcon
          onClick={closePopup}
          fontSize='large'
          className='icon'
        />
      </div>
    </div>
  );
}