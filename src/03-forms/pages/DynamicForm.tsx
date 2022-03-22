

import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';
import { MySelect } from '../components/MySelect';
import * as Yup from 'yup';

// Creamos función para genener nuestro initialValues dinamico
const initialValues: { [key: string]: any } = {};

// Objeto dinamico para las validaciones : trabajar solo con los campos que tengas validaciones
const requiredFields: { [key: string]: any } = {};



console.log(formJson);

for (const input of formJson) {

  // recorro arreglo para agregar campos dinamicos
  initialValues[input.name] = input.value;

  // en caso que no tenga validación
  if (!input.validations) continue;

  // empezamos a armar el objeto de validaciones
  let schema = Yup.string();

  // recorro arreglo para agregar validaciones dinamicas
  for (const rule of input.validations) {

    // Required
    if (rule.type === 'required') {
      schema = schema.required('Este campo es requerido');
    }

    // MinLength
    if (rule.type === 'minLength') {
      schema = schema.min(rule.value as any, `Este campo debe tener al menos ${rule.value} caracteres`);
    }

    // Email
    if (rule.type === 'email') {
      schema = schema.email('Este campo debe ser un email válido');
    }
  }

  // Genero el schema
  requiredFields[input.name] = schema;

}

//  Conexión con validationSchema
const validationSchema = Yup.object().shape(requiredFields);

export const DynamicForm = () => {
  return (
    <div>
      <h1> Dynamic Form</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}

      >
        {
          (_formik) => (
            <Form noValidate>
              {
                formJson.map(({ type, name, placeholder, label, options }) => {
                  if (type === 'input' || type === 'email' || type === 'password') {
                    return (
                      <MyTextInput
                        key={name}
                        type={(type as any)}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                      />
                    )

                  } else if (type === 'select') {
                    return (
                      <MySelect
                        key={name}
                        name={name}
                        label={label}
                      >
                        <option value="">Select and options</option>
                        {
                          options?.map(({ id, label }) => {
                            return <option key={id} value={id}>{label}</option>
                          })
                        }
                      </MySelect>
                    )
                  }
                  // return <span>El tipo type no es soportado</span>
                  throw new Error(`El type: ${type} no es soportado`);
                }
                )}

              <button type='submit' >Submit</button>
            </Form>
          )}
      </Formik>

    </div>
  )
}
