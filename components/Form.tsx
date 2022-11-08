import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';

type Props = {
  name: string,
  email: string,
  message: string,
};

function Form({}: Props) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Props>();
  //const onSubmit: SubmitHandler<Props> = data => console.log(data);

  const onSubmit: SubmitHandler<Props> = async function onSubmitForm(values) {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/contact`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        console.log("Email sent!");
      }
    } catch (err) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl mb-4">Kontakta mig</h2>
      <input className={`border rounded block p-4 mb-2 border-gray-400 w-full focus:outline-none ${errors.name ? 'ring-2 ring-red-500' : null}`} placeholder="Namn" {...register("name", { required: true })} />
      {errors.name && <span className="text-rose-500 block mb-4">This field is required</span>}
      <input className={`border rounded block mt-6 mb-2 p-4 border-gray-400 w-full focus:outline-none ${errors.email ? 'ring-2 ring-red-500' : null}`} placeholder="Email" {...register("email", { 
        required: true,
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: 'Please enter a valid email',
        }
      })} />
      {errors.email && <span className="text-rose-500 block mb-4">Please enter a valid email</span>}
      <textarea className={`border rounded block mt-6 mb-6 p-4 border-gray-400 w-full focus:outline-none ${errors.message ? 'ring-2 ring-red-500' : null}`} placeholder="Meddelande" {...register("message", { required: true })} />
      {errors.message && <span className="text-rose-500 block mb-4">This field is required</span>}
      <input className="rounded py-4 px-8 bg-blue-600 hover:bg-blue-800 text-white cursor-pointer" type="submit" value="Skicka" />
    </form>
  )
}

export default Form