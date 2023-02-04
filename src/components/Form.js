import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';
import { FaUserAlt } from 'react-icons/fa'
import { AiFillUnlock, AiOutlineMail } from 'react-icons/ai'
import { MdOutlineVisibility, MdOutlineVisibilityOff } from 'react-icons/md'
import { useAuthContext } from '../context/auth/auth';
import { useSignupContext } from '../context/auth/signup';
import { Navigate } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner'
import SuccessModal from './SuccessModal';

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



const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

export const LoginForm = () => {
  const { login, isAuth, loading } = useAuthContext()
  const [visible, setVisible] = useState(false);


  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={LoginSchema}
        onSubmit={values => {
          login(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full'>
            {isAuth && <Navigate to={'/chat'} />}
            <div class='flex flex-col my-5'>
              <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
              <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                <div><AiOutlineMail size='1.5em' /></div>
                <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                <Field name="email" type="email"
                  style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
              </div>
              {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
            </div>

            <div class='flex flex-col '>
              <label class='font-bold mb-1 text-lg' htmlFor="password">Password</label>
              <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                <div><AiFillUnlock size='1.5em' /></div>
                <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                <Field name="password" type={visible ? "text" : 'password'}
                  style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
                <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
              </div>
              {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
            </div>




            <div class='flex justify-center'>
              <button class={loading ? 'bg-white h-[50px] font-bold my-10 p-4 shadow-md flex items-center justify-center cursor-wait' : 'bg-white h-[50px] font-bold my-10 p-4 shadow-md flex items-center justify-center'} style={{ borderRadius: '10px' }} type="submit">{loading ? <div className='flex justify-center items-center'>
                <RotatingLines
                  strokeColor="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="20"
                  visible={true}
                />
                <p className='text-[gray]'>loading...</p>
              </div> : <p>Connexion</p>}</button>

            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}







const SignupSchema = Yup.object().shape({
  firstname: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastname: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup
    .string()
    .required('Password is required')
    .min(5, 'Your password is too short.'),
  confirmpassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export const SignupForm = () => {
  const [visible, setVisible] = useState(false)
  const { signup, success, error } = useSignupContext()

  return (
    <div className='w-full'>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmpassword: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          signup(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className='w-full'>

            

            <div className='block md:flex justify-between '>
              <div class='flex flex-col w-full md:w-[45%]'>
                <label class='font-bold mb-1 md:mb-0 text-lg' htmlFor="firstname">Prénom</label>
                <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                  <div><FaUserAlt size='1.5em' /></div>
                  <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                  <Field name="firstname" type="text"
                    style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
                </div>
                {errors.firstname && touched.firstname ? <p className='text-[red]'>{errors.firstname}</p> : null}
              </div>

              <div class='flex flex-col w-full md:w-[45%]'>
                <label class='font-bold mb-1 md:mb-0 text-lg' htmlFor="lastname">nom de famille</label>
                <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                  <div><FaUserAlt size='1.5em' /></div>
                  <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                  <Field name="lastname" type="text"
                    style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
                </div>
                {errors.lastname && touched.lastname ? <p className='text-[red]'>{errors.lastname}</p> : null}
              </div>
            </div>




            <div class='flex flex-col my-5'>
              <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
              <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                <div><AiOutlineMail size='1.5em' /></div>
                <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                <Field name="email" type="email"
                  style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
              </div>
              {errors.email && touched.email ? <div className='text-[red]'>{errors.email}</div> : null}
            </div>

            <div class='flex flex-col '>
              <label class='font-bold mb-1 text-lg' htmlFor="password">Password</label>
              <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                <div><AiFillUnlock size='1.5em' /></div>
                <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                <Field name="password" type={visible ? "text" : 'password'}
                  style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
                <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
              </div>
              {errors.password && touched.password ? <div className='text-[red]'>{errors.password}</div> : null}
            </div>


            <div class='flex flex-col mt-2'>
              <label class='font-bold mb-1 text-lg' htmlFor="confirmpassword">Confirm Password</label>
              <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
                <div><AiFillUnlock size='1.5em' /></div>
                <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
                <Field name="confirmpassword" type={visible ? "text" : 'password'}
                  style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }} />
                <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
              </div>
              {errors.confirmpassword && touched.confirmpassword ? <div className='text-[red]'>{errors.confirmpassword}</div> : null}
            </div>




            <div class='flex justify-center'>
              <button class='bg-white h-[50px] font-bold my-10 p-4 shadow-md flex items-center justify-center' style={{ borderRadius: '10px' }} type="submit">S'INSCRIRE</button>
            </div>
          </Form>
        )}
      </Formik>
      {success && <SuccessModal/>}
    </div>
  )
}


// export const SignupForm = () => {
//   const [visible, setVisible] = useState(false);
//   const [signupSuccess, setSignupSuccess] = useState(false)
//   const { signup, success, error } = useSignupContext()
//   // const {}

//   // Note that we have to initialize ALL of fields with values. These
//   // could come from props, but since we don’t want to prefill this form,
//   // we just use an empty string. If we don’t do this, React will yell
//   // at us.
//   const formik = useFormik({
//     initialValues: {
//       firstname: '',
//       lastname: '',
//       email: '',
//       password: '',
//       confirmpassword: '',
//     },
//     onSubmit: (values, { resetForm }) => {
//       // alert(JSON.stringify(values, null, 2));
//       signup(values)
//       resetForm({ values: '' })
//     },
//   });
//   return (
//     <div class='w-[100%]'>
//       <form onSubmit={formik.handleSubmit}>
//         <div class='flex flex-col md:flex-row justify-between my-5'>
//           <div class='flex flex-col w-full md:w-[45%]'>
//             <label class='font-bold mb-1 text-lg' htmlFor="firstname">Prénom</label>
//             <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
//               <div><FaUserAlt size='1.5em' /></div>
//               <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
//               <input
//                 id="firstname"
//                 name="firstname"
//                 type="text"
//                 onChange={formik.handleChange}
//                 value={formik.values.firstname}
//                 style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
//               />
//             </div>
//           </div>
//           <div class='flex flex-col w-full md:w-[45%]'>
//             <label class='font-bold mb-1 text-lg' htmlFor="lastname">nom de famille</label>

//             <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
//               <div><FaUserAlt size='1.5em' /></div>
//               <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
//               <input
//                 id="lastname"
//                 name="lastname"
//                 type="text"
//                 onChange={formik.handleChange}
//                 value={formik.values.lastname}
//                 style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
//               />
//             </div>
//           </div>
//         </div>

//         <div class='flex flex-col my-5'>
//           <label class='font-bold mb-1 text-lg' htmlFor="email">E-mail</label>
//           <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
//             <div><AiOutlineMail size='1.5em' /></div>
//             <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
//             <input
//               id="email"
//               name="email"
//               type="text"
//               onChange={formik.handleChange}
//               value={formik.values.email}
//               style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
//             />
//           </div>
//         </div>

//         <div class='flex flex-col '>
//           <label class='font-bold mb-1 text-lg' htmlFor="password">Password</label>
//           <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
//             <div><AiFillUnlock size='1.5em' /></div>
//             <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
//             <input
//               id="password"
//               name="password"
//               type={visible ? "text" : 'password'}
//               onChange={formik.handleChange}
//               value={formik.values.password}
//               style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
//             />
//             <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
//           </div>
//         </div>

//         <div class='flex flex-col mt-5'>
//           <label class='font-bold mb-1 text-lg' htmlFor="password">Confirm Password</label>
//           <div class='w-full flex items-center bg-white rounded-[10px] px-4'>
//             <div><AiFillUnlock size='1.5em' /></div>
//             <div style={{ height: '50px', width: '2px', backgroundColor: 'black', marginLeft: '10px', marginRight: '10px' }}></div>
//             <input
//               id="confirmpassword"
//               name="confirmpassword"
//               type={visible ? "text" : 'password'}
//               onChange={formik.handleChange}
//               value={formik.values.confirmpassword}
//               style={{ height: '50px', borderRadius: '10px', width: '100%', outline: 'none' }}
//             />
//             <div class='cursor-pointer' onClick={() => setVisible(!visible)}>{visible ? <MdOutlineVisibilityOff size='1.5em' /> : <MdOutlineVisibility size='1.5em' />}</div>
//           </div>
//         </div>


//         <div class='flex justify-center'>
//           <button class='bg-white h-[50px] font-bold my-10 p-4 shadow-md' style={{ borderRadius: '10px' }} type="submit">S'INSCRIRE</button>
//         </div>
//       </form>
//       {success && <SuccessModal/>}
//     </div>
//   );
// }



