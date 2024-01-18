import React, { useState } from "react";
import Container from "../component/layout/Container";
import Input from "../component/layout/Input";

const Login = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerr, setEmailerr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailerr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailerr("Enter your Email");
    }
    if (!password) {
      setPasswordErr("Enter your  Password");
    }
  };
  return (
    <section>
      <Container className={"mt-20"}>
        <form className="sm:w-[550px] w-full h-auto m-auto border p-5 sm:shadow-lg rounded-md">
          <div className="p-4">
            <h1 className="border-b border-[#262626] text-[#262626] font-dm md:text-[39px] text-3xl font-bold inline-block">
              Login
            </h1>
            <div>
              <Input
                className={"ml-0"}
                label={"Email"}
                type={"email"}
                placeholder={"helal@gmail.com"}
                onChange={handleEmail}
                value={email}
              />
              {emailerr && (
                <p className="text-red-400 text-sm font-semibold">
                  <span className="font-bold italic mr-1">!</span>
                  {emailerr}
                </p>
              )}
            </div>
            <div>
              <Input
                className={"ml-0"}
                label={"Password"}
                type={"password"}
                placeholder={"password"}
                onChange={handlePassword}
                value={password}
              />
              {passwordErr && (
                <p className="text-red-400 text-sm font-semibold">
                  <span className="font-bold italic mr-1">!</span>
                  {passwordErr}
                </p>
              )}
            </div>
            <div className="text-center">
              <button
                className=" bg-slate-800 hover:bg-slate-950 text-white text-xl font-bold rounded-sm transition-all duration-300 px-20 py-2 mt-7 inline-block"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Login;
