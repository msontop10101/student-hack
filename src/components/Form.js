import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { FaUserAlt } from 'react-icons/fa'
import { AiFillUnlock, AiOutlineMail } from 'react-icons/ai'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useAuthContext } from '../context/auth/auth';
import { useSignupContext } from '../context/auth/signup';
import { Navigate } from 'react-router-dom';


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
            style={{ height: '50px', borderRadius: '10px' }}
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
              style={{ height: '50px', borderRadius: '10px' }}
            />
          </div>
          <div class='flex flex-col w-full md:w-[45%] mt-4'>
            <label class='font-bold mb-1 text-lg' htmlFor="name">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.phone}
              style={{ height: '50px', borderRadius: '10px' }}
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
            style={{ minHeight: '100px', borderRadius: '10px' }}
          />
        </div>

        <div class='flex justify-center'>
          <button class='bg-white h-[50px] w-[100%] font-bold my-10 p-4 shadow-md' style={{ borderRadius: '10px' }} type="submit">Send</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;




export const LoginForm = () => {
  const { login, isAuth } = useAuthContext()
  const [visible, setVisible] = useState(false);
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      login(values)

      // console.log(values)
    },
  });

  if(isAuth) {
    <Navigate to={'/chat'} />
  }

  return (
    <div class='w-[100%]'>
      {isAuth&&<Navigate to={'/chat'} />}
      <form onSubmit={formik.handleSubmit}>
        <div class='flex flex-col my-5'>
          <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
          <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
            <div><AiOutlineMail size='1.5em' /></div>
            <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
            />
          </div>
        </div>

        <div class='flex flex-col '>
          <label class='font-bold mb-1 text-lg' htmlFor="password">Password</label>
          <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
            <div><AiFillUnlock size='1.5em' /></div>
            <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
            <input
              id="password"
              name="password"
              type={visible ? "text" : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
            />
            <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
          </div>
        </div>


        <div class='flex justify-center'>
          <button class='bg-white h-[50px] font-bold my-10 p-4 shadow-md' style={{ borderRadius: '10px' }} type="submit">Connexion</button>
        </div>
      </form>
    </div>
  );
}

export const SignupForm = () => {
  const [visible, setVisible] = useState(false);
  //eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  // const {signup} = useSignupContext()
  const {signup} = useSignupContext()
  // const {}

  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmpassword: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
      signup(values)

    },
  });
  return (
    <div class='w-[100%]'>
      <form onSubmit={formik.handleSubmit}>

        <div class='flex flex-col md:flex-row justify-between my-5'>
          <div class='flex flex-col w-full md:w-[45%]'>
            <label class='font-bold mb-1 text-lg' htmlFor="firstname">Prénom</label>
            <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
              <div><FaUserAlt size='1.5em' /></div>
              <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
              <input
                id="firstname"
                name="firstname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstname}
                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
              />
            </div>
          </div>
          <div class='flex flex-col w-full md:w-[45%]'>
            <label class='font-bold mb-1 text-lg' htmlFor="lastname">nom de famille</label>

            <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
              <div><FaUserAlt size='1.5em' /></div>
              <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
              <input
                id="lastname"
                name="lastname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastname}
                style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        <div class='flex flex-col my-5'>
          <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
          <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
            <div><AiOutlineMail size='1.5em' /></div>
            <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
            <input
              id="email"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
            />
          </div>
        </div>

        <div class='flex flex-col '>
          <label class='font-bold mb-1 text-lg' htmlFor="password">Password</label>
          <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
            <div><AiFillUnlock size='1.5em' /></div>
            <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
            <input
              id="password"
              name="password"
              type={visible ? "text" : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
            />
            <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
          </div>
        </div>

        <div class='flex flex-col mt-5'>
          <label class='font-bold mb-1 text-lg' htmlFor="password">Confirm Password</label>
          <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
            <div><AiFillUnlock size='1.5em' /></div>
            <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
            <input
              id="confirmpassword"
              name="confirmpassword"
              type={visible ? "text" : 'password'}
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
              style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
            />
            <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
          </div>
        </div>


        <div class='flex justify-center'>
          <button class='bg-white h-[50px] font-bold my-10 p-4 shadow-md' style={{ borderRadius: '10px' }} type="submit">S'INSCRIRE</button>
        </div>
      </form>
    </div>
  );
}



