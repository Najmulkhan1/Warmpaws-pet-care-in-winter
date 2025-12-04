import React, { use,  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { MdAccessTime, MdPets, MdVerifiedUser } from "react-icons/md";
import toast from "react-hot-toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = use(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        toast.success("Login successful!");
        setError("");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError("");
        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid credentials. Please try again.");
      });

    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full">
        <div className="hidden lg:block w-1/2 p-12 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-white/10 login-bg backdrop-blur-md rounded-lg"
            style={{
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl font-black text-white leading-tight drop-shadow-lg">
                Your Dedicated Pet Health Portal
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                Log in to access your dashboard, review personalized care
                schedules, and consult with our winter pet specialists.
              </p>
            </div>

            <div className="mt-auto space-y-3">
              <div className="flex items-center text-white">
                <MdVerifiedUser className="text-xl text-blue-300 mr-3 shrink-0" />
                <span className="font-semibold">
                  Secured Access to Health Records
                </span>
              </div>
              <div className="flex items-center text-white">
                <MdPets className="text-xl text-blue-300 mr-3 shrink-0" />
                <span className="font-semibold">
                  Personalized Winter Care Plans
                </span>
              </div>
              <div className="flex items-center text-white">
                <MdAccessTime className="text-xl text-blue-300 mr-3 shrink-0" />
                <span className="font-semibold">24/7 Expert Support Chat</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 mb-8">
            Sign in to continue to your account.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            )}

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

          
            <div className="text-sm text-right">
              <Link
              to={"/forgot-password"}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>

          
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out transform hover:scale-[1.01] active:scale-95"
              >
                Login
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

          
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
               className="font-medium text-blue-600 hover:underline hover:text-blue-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
