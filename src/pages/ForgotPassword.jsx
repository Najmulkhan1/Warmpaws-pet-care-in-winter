import React, { use, useRef } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { to } from 'react-spring';

const ForgotPassword = () => {

    const emailRef = useRef();
    const {resetPassword} = use(AuthContext)


    const handleForgotPassword = (e) => {
        e.preventDefault();
    
        const email = emailRef.current.value;
        if (!email) {
          toast.error("Please enter your email address to reset your password.");
          return;
        }
    
       
        resetPassword(email)
          .then(() => {
            toast.success("Password reset email sent. Please check your inbox.");
            emailRef.current.value = '';
          })
          .catch((error) => {
            toast.error(error.message);
            toast.error(
              "Error sending password reset email. Please try again later."
            );
          });
      };
    

  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-[#d2dcfc] max-w-100 p-8 rounded-lg shadow-lg'>
            <div className='flex justify-center mb-4'>
                <img src="https://cdn.dribbble.com/userupload/42301960/file/original-cfa4ab7156e3e090f90842d79a9389e8.gif" alt="" />
            </div>
          <h2 className='text-4xl text-center text-[#5270f7] font-bold mb-4'>Forgot Password</h2>
          <p className='text-center text-[14px] text-gray-500 mb-4'>Please enter your email address to reset your password.</p>
          <form>
            <input
              type='email'
              name='email'
              ref={emailRef}
              placeholder='you@example.com'
              className='border bg-gray-100  border-gray-300 rounded-full px-4 py-2 w-full mb-4'
            />
            <button
              type='submit'
              onClick={handleForgotPassword}
              className='bg-blue-500 text-white p-2 rounded-full w-full'
            >
              Send Reset Link
            </button>
          </form>

          <div className='text-center mt-4'>
            <p className='text-sm text-gray-600'>
              Remembered your password?{' '}
              <Link to='/login' className='text-blue-500 hover:underline'>
                Login
              </Link>
            </p>
          </div>
        </div>
    </div>
  )
}

export default ForgotPassword