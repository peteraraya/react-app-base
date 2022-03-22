
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components Tutorial</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),

          lastName: Yup.string()
            .max(20, 'Debe tener 20 caracteres o menos')
            .required('Requerido'),

          email: Yup.string()
            .email('Debe ser un email válido')
            .required('Requerido'),
          
          terms: Yup.boolean()
            .oneOf([true], 'Debe aceptar los términos y condiciones'),
          
          jobType: Yup.string()
            .notOneOf([''], 'Debe seleccionar una opción')
            .notOneOf(['Temporary'], 'Esta opción no es permitida')
            .required('Requerido'),
          
        })
        }
      >
        {
          formik => (
            <Form>
              <label htmlFor='firstName' >FirstName</label>
              <Field type='text' name='firstName' placeholder="Ingrese nombre" />
              <ErrorMessage name='firstName' component="span" />

              <label htmlFor='lastName' >LastName</label>
              <Field type='text' name='lastName' placeholder="Ingrese apellido" />
              <ErrorMessage name='lastName' component="span"  />


              <label htmlFor='email' >Email Adress</label>
              <Field type='text' name='email' placeholder="Ingrese email" />
              <ErrorMessage name='email' component="span" />
              
              <label>
                <Field type='checkbox' name='terms' />
                Terms and conditions
              </label>
              <ErrorMessage name='terms' component="span" />
              

              <label htmlFor='jobType' >Job Type</label>
              <Field as='select' name='jobType'>
                <option value=''>Select a job type</option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Freelance'>Freelance</option>
                <option value='Internship'>Internship</option>
                <option value='Temporary'>Temporary</option>  
              </Field>
              
                <ErrorMessage name='jobType' component="span" />


              <button
                type="submit"
              >
                Submit
              </button>

            </Form>
          )
        }


      </Formik>


    </div>
  )
}
