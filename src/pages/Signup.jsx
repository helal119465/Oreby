import React, { useState } from "react";
import Container from "../component/layout/Container";
import Breadcrum from "../component/Breadcrum";
import Title from "../component/layout/Title";
import Input from "../component/layout/Input";
import Flex from "../component/layout/Flex";

const Signup = () => {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [presentAdress, setPresentAdress] = useState("");
  let [permanentAdress, setPermanentAdress] = useState("");
  let [password, setPassword] = useState("");
  let [confimPassword, setConfrimPassword] = useState("");
  //Error Msg
  let [firstNameErr, setFirstNameErr] = useState("");
  let [lastNameErr, setLastNameErr] = useState("");
  let [emailErr, setEmailErr] = useState("");
  let [phoneErr, setPhoneErr] = useState("");
  let [presentAdressErr, setPresentAdressErr] = useState("");
  let [permanentAdressErr, setPermanentAdressErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [confimPasswordErr, setConfirmPasswordErr] = useState("");
  let [checkbox, setCheckbox] = useState(false);

  const handlefName = (e) => {
    setFirstName(e.target.value);
    setFirstNameErr("");
  };
  const handlelName = (e) => {
    setLastName(e.target.value);
    setLastNameErr("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setPhoneErr("");
  };
  const handlePresentAdress = (e) => {
    setPresentAdress(e.target.value);
    setPresentAdressErr("");
  };
  const handlePermanentAdress = (e) => {
    setPermanentAdress(e.target.value);
    setPermanentAdressErr("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };
  const handleConfirmPassword = (e) => {
    setConfrimPassword(e.target.value);
    setConfirmPasswordErr("");
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    if (checkbox) {
      if (!firstName) {
        setFirstNameErr("First Name is Required");
      }
      if (!lastName) {
        setLastNameErr("Last Name is Required");
      }
      if (!email) {
        setEmailErr("Email is Required");
      }
      if (!phone) {
        setPhoneErr("Phone is Required");
      }
      if (!presentAdress) {
        setPermanentAdressErr("Present Adress is Required");
      }
      if (!permanentAdress) {
        setPermanentAdressErr("Permanent Adress is Required");
      }
      if (!password) {
        setPasswordErr("Password is Required");
      }
      if (!confimPassword) {
        setConfirmPasswordErr("Confirm Password is Required");
      }
    }
  };
  return (
    <section className="font-dm">
      <Container>
        <Breadcrum
          title={location.pathname.split("/")[1]}
          linkVal={"home"}
          currentPage={location.pathname.split("/")[1]}
        />
        <Title title={"Create your account"} />
        <form>
          <Flex className={"justify-between md:flex-row flex-col"}>
            <div className="md:w-[48%] w-full">
              <Input
                label={"First Name"}
                placeholder={"first name"}
                type={"text"}
                value={firstName}
                onChange={handlefName}
              />
              {firstNameErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {firstNameErr}
                </p>
              )}
            </div>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Last Name"}
                placeholder={"last name"}
                type={"text"}
                value={lastName}
                onChange={handlelName}
              />
              {lastNameErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {lastNameErr}
                </p>
              )}
            </div>
          </Flex>
          <Flex className={"justify-between md:flex-row flex-col"}>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Email Address"}
                placeholder={"helal@gmail.com"}
                type={"email"}
                value={email}
                onChange={handleEmail}
              />
              {emailErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {emailErr}
                </p>
              )}
            </div>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Phone"}
                placeholder={"Your phone number"}
                type={"tel"}
                value={phone}
                onChange={handlePhone}
              />
              {phoneErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {phoneErr}
                </p>
              )}
            </div>
          </Flex>
          <Flex className={"justify-between md:flex-row flex-col"}>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Present Address"}
                placeholder={"raod-02 house-#B212"}
                type={"text"}
                value={presentAdress}
                onChange={handlePresentAdress}
              />
              {presentAdressErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {presentAdressErr}
                </p>
              )}
            </div>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Permanent Address"}
                placeholder={"4279 Zboncak Port Suite 6212"}
                type={"text"}
                value={permanentAdress}
                onChange={handlePermanentAdress}
              />
              {permanentAdressErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {permanentAdressErr}
                </p>
              )}
            </div>
          </Flex>
          <Flex className={"justify-between md:flex-row flex-col"}>
            <div className="md:w-[48%] w-full mt-6 ml-2">
              <h1 className="text-base font-bold">Division</h1>
              <select className=" w-full block text-sm pt-2 pb-3 border-b-2 border-[#F0F0F0] outline-none">
                <option className="text-[#767676]">Please select</option>
                <option>Barishal</option>
                <option>Chattogram</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Rajshahi</option>
                <option>Rangpur</option>
                <option>Mymensingh</option>
                <option>Sylhet</option>
              </select>
            </div>
            <div className="md:w-[48%] w-full mt-6 ml-2">
              <h1 className="text-base font-bold">District</h1>
              <select className=" w-full block text-sm pt-2 pb-3 border-b-2 border-[#F0F0F0] outline-none">
                <option className="text-[#767676]">Please select</option>
                <option>Dhaka</option>
                <option>Faridpur</option>
                <option>Gazipur</option>
                <option>Gopalganj</option>
                <option>Jamalpur</option>
                <option>Kishoreganj</option>
                <option>Madaripur</option>
                <option>Munshiganj</option>
                <option>Mymensingh</option>
                <option>Narayanganj</option>
                <option>Narsingdi</option>
                <option>Netrokona</option>
                <option>Rajbari</option>
                <option>Shariatpur</option>
                <option>Sherpur</option>
              </select>
            </div>
          </Flex>
          <Flex className={"justify-between md:flex-row flex-col"}>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Password"}
                type={"password"}
                placeholder={"password"}
                value={password}
                onChange={handlePassword}
              />
              {passwordErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {passwordErr}
                </p>
              )}
            </div>
            <div className="md:w-[48%] w-full">
              <Input
                label={"Confirm Password"}
                type={"password"}
                placeholder={"Confirm password"}
                value={confimPassword}
                onChange={handleConfirmPassword}
              />
              {confimPasswordErr && (
                <p className="text-red-500 text-sm font-semibold">
                  <span className="text-red-500 font-bold italic">! </span>
                  {confimPasswordErr}
                </p>
              )}
            </div>
          </Flex>
          <div className="my-16 pl-2">
            <Flex className={"items-center gap-x-3 mb-6"}>
              <input
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
                onChange={() => setCheckbox(!checkbox)}
              />
              <p className="text-[#767676]">
                I have read and agree to the{" "}
                <span className="text-blue-500">Privacy Policy</span>
              </p>
            </Flex>
            <button
              className={`${
                checkbox
                  ? "bg-[#262626] text-white hover:bg-slate-950 transition-all"
                  : " bg-gray-400 text-white cursor-none"
              } inline-block py-4 px-6 text-base font-bold rounded-md `}
              onClick={handleSignUp}
            >
              Create Account
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default Signup;
