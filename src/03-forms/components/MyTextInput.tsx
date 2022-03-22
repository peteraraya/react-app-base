
import { ErrorMessage, useField } from 'formik';
interface Props {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'email' | 'tel';
  [x:string]: any; // puede resibir cualquier cosa
}


export const MyTextInput = ( {label, ...props }: Props) => {

  // la metada nos dira si ha sido tocado , hay errores etc
  const [field, meta] = useField(props);

  // console.log(field);
  // console.log('field ::>', field);
  // console.log('meta  ::>', meta);
  // console.log('props ::>', props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
      {/* {
        
        // errores con la forma opcional
        meta.touched && meta.error && (
          <span className='error'>{meta.error}</span>
        )
        
      } */}
    </>
  )
}
