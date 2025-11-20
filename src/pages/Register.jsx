import React, { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import { MdAccessTime, MdPets, MdVerifiedUser } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, signInWithGoogle, userProfileUpdate } = use(AuthContext);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const image = from.image.value;
    const email = from.email.value;
    const password = from.password.value;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least one uppercase, one lowercase letter, and be 6+ characters long."
      );
      return;
    } else {
      toast.success("✅ Password is valid!");
    }

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        userProfileUpdate({ displayName: name, photoURL: image })
          .then(() => {
           
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });

  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="hidden lg:block w-1/2 p-12 relative register-bg overflow-hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

          <div className="relative h-full flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-4xl font-black text-white z-10">
                Join Our Cozy Community
              </h1>
              <p className="text-lg text-white z-10 leading-relaxed">
                Access expert winter care tips, track your pet’s health, and
                shop cozy winter gear—all in one place.
              </p>
            </div>

            <div
              className="mt-auto bg-orange-500 p-6 rounded-lg shadow-xl"
              data-aos="fade-up"
            >
              <h2 className="text-xl font-bold text-white mb-1">
                Pet Safety is Priority!
              </h2>
              <p className="text-sm text-orange-100">
                Register now to receive your free guide on recognizing signs of
                hypothermia.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome👋</h2>
          <p className="text-gray-500 mb-8">Create an account to continue.</p>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Input Group */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="Your Name"
              />
            </div>

            {/* Image URL Input Group */}
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                id="image"
                name="image"
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="https://example.com/your-image.jpg"
              />
            </div>

            {/* Email Input Group */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                placeholder="you@example.com"
              />
            </div>

            {/* Password Input Group */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 transition duration-150 ease-in-out"
                  placeholder="********"
                />
                <button
                  onClick={handleTogglePasswordShow}
                  className="cursor-pointer absolute top-3 right-3"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01] active:scale-95"
              >
                Sign Up
              </button>

              {/* Google */}
              <button
                onClick={handleGoogleSignIn}
                className="btn bg-white mt-3 w-full text-black rounded-lg border-[#e5e5e5] transition duration-150 ease-in-out transform hover:scale-[1.01]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="font-medium text-blue-600 hover:underline hover:text-blue-500"
            >
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
