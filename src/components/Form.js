import React from 'react';
import { useFormik } from 'formik';

const ContactForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div class='w-[100%]'>
      <form onSubmit={formik.handleSubmit}>
      <div class='flex flex-col '>
      <label class='font-bold mb-1 text-lg' htmlFor="name">Nom</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
        style={{height: '50px', borderRadius:'10px'}}
      />
      </div>

      <div class='flex flex-col md:flex-row justify-between my-5'>
      <div class='flex flex-col w-full md:w-[45%]'>
      <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        style={{height: '50px', borderRadius:'10px'}}
      />
      </div>
      <div class='flex flex-col w-full md:w-[45%]'>
      <label class='font-bold mb-1 text-lg' htmlFor="name">pas-de-telephone</label>
      <input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
        style={{height: '50px', borderRadius:'10px'}}
      />
      </div>
      </div>


      <div class='flex flex-col'>
      <label class='font-bold mb-1 text-lg' htmlFor="message">Message:</label>
      <textarea
        id="=message"
        name="message"
        type="=text"
        onChange={formik.handleChange}
        value={formik.values.message}
        style={{minHeight: '100px', borderRadius:'10px'}}
      />
      </div>

      <div class='flex justify-center'>
      <button class='bg-white h-[50px] font-bold my-10 p-4 shadow-md' style={{borderRadius:'10px'}} type="submit">NONS VOUS PALIEREE</button>
      </div>
    </form>
    </div>
  );
};

export default ContactForm;


