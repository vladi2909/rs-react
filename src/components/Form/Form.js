import { useState } from 'react';
import { Button } from '../ui/Button';
import './Form.css';

export const Form = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [country, setCountry] = useState('Minsk');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    setFormValues(
      state => [
        ...state,
        {
          firstName,
          lastName,
          birthday,
          country,
          agree
        }
      ]
    );
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='firstName'>
          FirstName:
          <input 
            type='text'
            name='firstName'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor='lastName'>
          LastName:
          <input 
            type='text'
            name='lastName'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label htmlFor='Birthday'>
          Birthday:
          <input 
            type='date'
            name='Birthday'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </label>
        <label htmlFor='country'>
          Country:
          <select
            name='country'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option>Minsk</option>
            <option>Mogilev</option>
            <option>Brest</option>
          </select>
        </label>
        <label htmlFor='agree'>
          I'm agree
          <input
            type='checkbox'
            name='agree'
            checked={agree}
            onChange={() => setAgree(prev => !prev)}
          />
        </label>
        <Button variant="contained" title="Submit" />
      </div>

      
    </form>
  );
};