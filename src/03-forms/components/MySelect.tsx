
import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any; // puede resibir cualquier cosa
}

export const MySelect = ({ label, ...props }: Props) => {

  // la metada nos dira si ha sido tocado , hay errores etc
  const [field] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" className="custom-error-class" />
    </>
  )
}
