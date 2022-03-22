
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {

  const {
    handleSubmit,
    errors,
    touched,
    getFieldProps
  } = useFormik({

    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => { 
      console.log(values);
    },   
    
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe tener 15 caracteres o menos')
        .required('Requerido'),
      
      lastName: Yup.string()
        .max(20, 'Debe tener 20 caracteres o menos')
        .required('Requerido'),
      
      email: Yup.string()
        .email('Debe ser un email válido')
        .required('Requerido'),
    }),

  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName' >FirstName</label>
        <input
          type="text"
         {...getFieldProps('firstName')} // se pueden enviar todas las props
          // name='firstName'
          // value={values.firstName}
          // onChange={handleChange}
          // onBlur={handleBlur}
        />
     
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span> }

        <label htmlFor='lastName' >LastName</label>
        <input
          type="text"
          {...getFieldProps('lastName')}
        />

        { touched.lastName && errors.lastName && <span>{errors.lastName}</span> }


        <label htmlFor='email' >Email Adress</label>
        <input
          type="email"
          {...getFieldProps('email')}
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
