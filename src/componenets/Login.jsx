import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Result } from "postcss";

const Login = () => {
  const { signIn ,signInwithgoogle} = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    // log in user
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset()
        navigate("/orders")
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleSignIn =()=>{
    signInwithgoogle()
    .then(result => {
        console.log(result.user)
        navigate('/')
    })
    .catch(error => console.log(error.message))
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-2xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="ml-4 mb-4">
            New to this website? please{" "}
            <Link to="/register" className="font-bold">
              {" "}
              Register
            </Link>
          </p>
          <p>
            <button onClick={handleGoogleSignIn} className="btn btn-ghost">Google</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
