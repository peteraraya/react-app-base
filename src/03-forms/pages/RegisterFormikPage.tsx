

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput } from '../components/MyTextInput';



export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object().shape({
            firstName: Yup.string()
              .trim()
              .min(2, 'Too Short!')
              .max(15, 'Must be 15 characters or less')
              .required('First Name is required'),
            lastName: Yup.string()
              .trim()
              .max(15, 'Must be 15 characters or less')
              .required('Last Name is required'),
            email: Yup.string()
              .trim()
              .email('Email is invalid')
              .required('Email is required'),
            password1: Yup.string()
              .trim()
              .min(6, 'Password must be at least 6 characters')
              .required('Password is required'),
            password2: Yup.string()
              .trim()
              .oneOf([Yup.ref('password1'), null], 'Passwords must match')
              .required('Confirm Password is required'),
          })
        }


      >
        {
          ({handleReset}) => (

            <Form>
              <MyTextInput label={'Nombre'}           name={'firstName'} placeholder="Ingrese nombre"     type="text"     />
              <MyTextInput label={'Apellido'}         name={'lastName'}  placeholder="Ingrese apellido"   type="text"     />
              <MyTextInput label={'Email'}            name={'email'}     placeholder="asdf@gmail.com"     type="email"    />
              <MyTextInput label={'Passdord'}         name={'password1'} placeholder="Ingrese password"   type="password" />
              <MyTextInput label={'Repita Password'}  name={'password2'} placeholder="Repita el password" type="password" />
              
              <button type={'submit'}>Register</button>
              <button type={'button'} onClick={handleReset}>Reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

