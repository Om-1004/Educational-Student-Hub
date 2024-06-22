import LoginPageImg from "../assets/images/loginIMG.jpg";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      {/* Increased max width from max-w-3xl to max-w-5xl */}
      <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-5xl w-full p-5 sm:text-center lg:text-left">
        <div className="md:w-1/2 px-8">
          <h2 className="font-bold text-2xl">Login</h2>
          <div className="flex lg:flex-row justify-between items-center text-sm mt-4 sm:flex-col sm:gap-3">
            <p>Don't have an account?</p>
            <Link
              to="/signup"
              className="text-blue-700 underline hover:cursor-pointer"
            >
              Sign Up Here
            </Link>
          </div>

          <form action="" className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl"
              type="text"
              name="email"
              placeholder="Email"
            />
            <div className="relative">
              <input
                className="p-2 rounded-xl w-full"
                type="password"
                name="password"
                placeholder="Password"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="gray"
                className="bi bi-eye b absolute top-1/2 right-5 -translate-y-1/2"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </div>
            <button className="bg-[#92B4FB] text-white py-2 rounded-xl hover:scale-105 duration-300">
              Login
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-300">
            <hr className="border-gray-300 my-4" />
            <p className="text-center text-sm text-gray-500">OR</p>
            <hr className="w-full border-gray-300 my-4" />
          </div>

          <p className="mt-5 text-xs border-b py-4">Forgot your password?</p>

          <div className="text-xs flex lg:flex-row justify-between items-center lg:mt-3 sm:flex-col sm:gap-4 sm:mt-6">
            <p>If You Don't Have An Account?</p>
            <button onClick={() => navigate('/signUp')} className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300 block">
              Register
            </button>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img className="rounded-2xl h-full" src={LoginPageImg} alt="Login" />
        </div>
      </div>
    </div>
  );
}
