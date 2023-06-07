import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import {  useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { email, password } = data;

    // Email password login
   
  };

 

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center bg-base-200 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 card">
          <div>
         
            <h2 className="mt-6 text-center text-md md:text-2xl font-extrabold">
              Log in to your account
            </h2>
          </div>
          <form onSubmit={handleSubmit(handleLogin)} className=" space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="enter your email"
                {...register("email", { required: "Email is required" })}
                className={`input input-bordered ${
                  errors.email ? "input-error" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.password ? "input-error" : ""
                  }`}
                />
                <button
                  className="absolute right-2 inset-y-0"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between flex-wrap text-center">
              <div className="form-control">
                <label className="cursor-pointer label justify-normal md:gap-x-2 text-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text px-1"> Remember me</span>
                </label>
              </div>
              <div>
                <a href="#" className="btn-link">
                  Forget password
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button type="submit" className="btn btn-primary border-0 w-full">
                Log in
              </button>
            </div>
          </form>

          <button
            className="btn btn-outline  w-full"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              className="w-6 h-6 mx-2"
            />{" "}
            Login With Google
          </button>

          <div>
            <h2>
              Don&apos;t have an account?{" "}
              <Link className="btn-link" to="/registration">
                Click here to Register
              </Link>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;