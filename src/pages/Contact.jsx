import React, { useState } from "react";
import Container from "../component/layout/Container";
import Breadcrum from "../component/Breadcrum";
import Title from "../component/layout/Title";
import Input from "../component/layout/Input";

const Contact = () => {
  let [Name, setName] = useState("");
  let [Email, setEmail] = useState("");
  let [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((Name.length == 0) | (Email.length == 0)) {
      setError(true);
    }
  };
  return (
    <section className="font-dm">
      <Container>
        <Breadcrum
          title={window.location.pathname.split("/")[1]}
          linkVal={"home"}
          link={"/"}
          currentPage={window.location.pathname.split("/")[1]}
          currentPageLink={"/contacts"}
        />
        <Title title={"Fill up a Form"} />
        <div className="mt-10">
          <from>
            <div>
              <Input
                className={"lg:w-1/2 w-[95%]"}
                label={"Name *"}
                type={"text"}
                placeholder={"Please name here"}
                onChange={(e) => setName(e.target.value)}
              />
              {error && Name.length <= 0 ? (
                <p className="ml-2 text-red-400">Name is Requried</p>
              ) : (
                ""
              )}
            </div>
            <div>
              <Input
                className={"lg:w-1/2 w-[95%]"}
                label={"Email *"}
                type={"email"}
                placeholder={"Please email here"}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && Email.length <= 0 ? (
                <p className="ml-2 text-red-400">Email is Requried</p>
              ) : (
                ""
              )}
            </div>
            <div className="mt-6 mb-[30px] ml-2">
              <label className="text-[#262626] text-base font-bold mb-[10px]">
                Message
              </label>
              <textarea
                placeholder="Your message here"
                className=" lg:w-1/2 w-[95%] h-24 block text-sm outline-none border-b-2 border-[#F0F0F0]"
              ></textarea>
            </div>
            <button
              className=" bg-slate-800 hover:bg-slate-950 text-white text-xl font-bold rounded-sm transition-all duration-300 px-20 py-4 mt-7 inline-block"
              onClick={handleSubmit}
            >
              Post
            </button>
          </from>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
