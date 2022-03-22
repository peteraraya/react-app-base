
import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {

  interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
  }

  const validate = ( {firstName, lastName, email } : FormValues ) => {
    // Validaciones

    // obj contendrá todos los errores
    const errors: FormikErrors<FormValues> = {};
    
    if (!firstName) {
      errors.firstName = 'Required';
    }else if (firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Required';
    }else if (lastName.length >= 10) {
      errors.lastName = 'Must be 10 characters or less';
    }

    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    console.log(errors);
    // reresa errores
    return errors;


  }

  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    values
  } = useFormik({

    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => { 
      console.log(values);
    },   
    
    validate: validate,

  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName' >FirstName</label>
        <input
          type="text"
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
     
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

        <label htmlFor='lastName' >LastName</label>
        <input
          type="text"
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }


        <label htmlFor='email' >Email Adress</label>
        <input
          type="email"
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        { touched.email && errors.email && <span>{errors.email}</span> }


        <button
          type="submit"
        >
          Submit
        </button>

      </form>
    </div>
  )
}
