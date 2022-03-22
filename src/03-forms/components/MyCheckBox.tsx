
import { ErrorMessage, useField } from 'formik';
interface Props {
  label: string;
  name: string;
  [x: string]: any; // puede resibir cualquier cosa
}


export const MyCheckBox = ({ label, ...props }: Props) => {

  // la metada nos dira si ha sido tocado , hay errores etc
  const [field] = useField({ ...props, type: 'checkbox' });

  return (
    <>
      <label>
        <input type='checkbox' {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
    </>
  )
}
