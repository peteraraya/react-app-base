
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Optimize imports
import { MyTextInput, MyCheckBox, MySelect } from '../components';

// Css
import '../styles/styles.css';
export const FormikAbstraction = () => {

  return (
    <div>
      <h1> Formik Abstraction Tutorial</h1>

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
              <MyTextInput
                label="FirstName"
                name="firstName"
                placeholder="Ingrese su nombre"
              />

              <MyTextInput
                label="LastName"
                name="lastName"
                placeholder="Ingrese su apellido"
              />

              <MyTextInput
                label="Email"
                name="email"
                placeholder="Ingrese su email"
              />

              <MyCheckBox
                label="Acepto los términos y condiciones"
                name="terms"
              />

              <MySelect
                as='select'
                label={'Job Type'}
                name='jobType'>
                <option value=''>Select a job type</option>
                <option value='Full Time'>Full Time</option>
                <option value='Part Time'>Part Time</option>
                <option value='Freelance'>Freelance</option>
                <option value='Internship'>Internship</option>
                <option value='Temporary'>Temporary</option>
              </MySelect>

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
