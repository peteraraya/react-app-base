

import '../styles/styles.css';

import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

  // destructuring 
  const {
    formData,
    name,
    email,
    password,
    passwordConfirmation,
    handleInputChange,
    resetForm,
    isValidEmail,
    
  } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  });


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  }




  return (
    <div>
      <h1>Register Page</h1>
      {/* novalidate : quita validaciones html */}
      <form noValidate onSubmit={onSubmit}>
        <input
          type={'text'}
          name={'name'}
          placeholder="Name"
          value={name} 
          onChange={handleInputChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
       { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}


        <input
          type={'email'}
          name={'email'}
          placeholder="Email"
          value={email}
          onChange={handleInputChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email no es válido</span>}
        <input
          type={'password'}
          name={'password'}
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          />
          {password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
          {password.trim().length < 6 && password.trim().length > 0 && <span>La contraseña debe tener 6 caracteres </span>}
        <input
          type={'password'}
          name={'passwordConfirmation'}
          placeholder="Repeat Password"
          value={passwordConfirmation}
          onChange={handleInputChange}
        />
        {passwordConfirmation.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        { passwordConfirmation.trim().length > 0 && password !== passwordConfirmation && <span>Las contraseñas deben ser iguales</span>}

        <button type={'submit'}>Register</button>
        <button type={'button'} onClick={resetForm}>Reset</button>
      </form>
    </div>
  )
}

