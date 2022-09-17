import { Button } from '../ui/Button';
import './Form.css';
import { useForm } from 'react-hook-form';

export const Form = ({ setFormValues }) => {
  const {
    register,
    formState: {
      errors,
      isValid,
    },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur', defaultValues: { agree: false } });

  const onSubmit = (data) => {
    reset();
    setFormValues(state => [...state, {data}]);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='firstName'>
          FirstName:
          <input 
            type='text'
            { ...register('firstName', {
              required: 'required field',
              minLength: {
                value: 3,
                message: 'min 3 characters',
              }
            }) }
          />
        </label>
        <div>
          {errors?.firstName && <p className='error'>{errors?.firstName.message}</p>}
        </div>
        <label htmlFor='lastName'>
          LastName:
          <input 
            type='text'
            { ...register('lastName', {
              required: 'required field',
              minLength: {
                value: 3,
                message: 'min 3 characters',
              }
            }) }
          />
        </label>
        <div>
          {errors?.lastName && <p className='error'>{errors?.lastName.message}</p>}
        </div>
        <label htmlFor='birthday'>
          Birthday:
          <input 
            type='date'
            { ...register('birthday', {
              required: 'required field',
            })}
          />
        </label>
        <div>
          {errors?.birthday && <p className='error'>{errors?.birthday.message}</p>}
        </div>
        <label htmlFor='country'>
          Country:
          <select
            name='country'
            { ...register('country')}
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
            { ...register('agree', {
              required: 'required field',
            })}
          />
        </label>
        <div>
          {errors?.agree && <p className='error'>{errors?.agree.message}</p>}
        </div>
        <input
          type='submit'
          variant="contained"
          title="Submit"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};