import { useState } from 'react';

export const useForm = <T>(initialState: T) => {
  // setting the initial state
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {

    setFormData(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  const resetForm = () => {
    setFormData({...initialState})
  }

  const isValidEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return {
    // exparsimos todas las propiedades
    ...formData,

    // properties
    formData,

    // methods
    handleInputChange,
    resetForm,
    isValidEmail

  };
}

//  T : tipo de dato que se va a retornar