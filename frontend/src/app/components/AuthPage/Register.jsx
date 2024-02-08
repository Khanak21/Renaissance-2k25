"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill, BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineMail, AiFillEye, AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import registerUserApi from "../../../api/registerUser.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
//import Background from "./Background";

const img = "/rene.png";

const Register = ({ data, setData, setPage }) => {
  const [icon, seticon] = useState(true);
  const [errors, setErr] = useState({});
  const router = useRouter();

  const validateForm = (formData) => {
    let errors = {};

    // Example validation rules, you can customize these as needed
    if (!formData.username.trim()) {
      errors.username = "Username is required";
      toast.error("Username is required");
    }
    if (formData.student_from == "") {
      errors.student_from = "Select college";
      toast.error("select college");
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      toast.error("password is required");
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      toast.error("email is required");
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
      toast.error("invalid email address");
    }
    if (!formData.tel.trim()) {
      errors.tel = "Telephone number is required";
      toast.error("mobile number is required");
    } else if (!isValidIndianPhoneNumber(formData.tel)) {
      errors.tel = "Invalid Indian telephone number";
      toast.error("Invalid mobile number");
    }
    // Add more validation rules as needed

    return errors;
  };
  const isValidIndianPhoneNumber = (tel) => {
    // Example Indian telephone number validation
    // You can customize the regex based on the specific format you want to allow
    return /^[6-9]\d{9}$/.test(tel);
  };

  const isValidEmail = (email) => {
    // Example email validation, you can use a library or a regex for more robust validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const show = () => {
    seticon(!icon);
  };
  //Handling form data
  function handleFormChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  //handling the submit and showing otp page
  async function handleSubmit(e) {
    //  e.preventDefault();

    // Perform validation
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length === 0) {
      // No errors, submit the form
      const apiResult = await registerUserApi({
        gender: data.Gender,
        mobile: data.tel,
        isMnnitStudent: data.student_from,
        ...data,
      });
      if (apiResult.success === true) {
        toast((t) => (
          <span className="flex items-center justify-between w-full h-full">
            {apiResult.message}
            <button onClick={() => toast.dismiss(t.id)} className="ml-2">
              <AiOutlineCloseCircle />
            </button>
          </span>
        ));
        router.push("/");
      } else {
        toast.error(apiResult.message);
      }
    }
  }

  return (
    <>
      <div className="w-full bg-custom-secondary">
        <div className=""></div>

        <div className="flex justify-center p-5 md:py-10 md:px-20">
          <div className="z-20 flex flex-col pb-5 md:pb-10 md:px-20 rounded-2xl bg-custom-primary">
            <div className="flex flex-col items-center justify-center w-full mb-2 md:mb-4 logo">
              <Image
                className=""
                width={500} // Set the width of the image
                height={250} // Set the height of the image
                src={img}
                priority={true}
                alt="renLogo"
              ></Image>
              <h1 className="mt-4 text-lg font-medium md:text-2xl text-custom-secondary">
                Create Account💎
              </h1>
            </div>
            <div className="flex justify-center">
              {" "}
              {errors.username && (
                <span style={{ color: "red" }}>{errors.username}</span>
              )}
            </div>
            <div className="flex justify-center">
              <div className="w-[80%]">
                <div className="flex mt-4 mb-2">
                  <div className="flex items-center justify-center mr-3">
                    <FaUserCircle size="24px" color="#EEF5DB" />
                  </div>
                  <input
                    onChange={handleFormChange}
                    className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                    placeholder="Username"
                    name="username"
                    value={data.username}
                    required
                  ></input>
                </div>
                <div className="flex justify-center gap-10 mb-2">
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="stude"
                    >
                      <input
                        onChange={handleFormChange}
                        name="student_from"
                        id="mnnit"
                        value="mnnit"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-custom-secondary text-custom-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-custom-secondary checked:before:bg-custom-secondary hover:before:opacity-10"
                      />
                      <span className="absolute transition-opacity opacity-0 pointer-events-none text-custom-secondary top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-base font-semibold cursor-pointer select-none text-custom-secondary"
                      htmlFor="mnnit"
                    >
                      MNNIT Student
                    </label>
                  </div>
                  <div className="inline-flex items-center">
                    <label
                      className="relative flex items-center p-3 rounded-full cursor-pointer"
                      htmlFor="react"
                    >
                      <input
                        onChange={handleFormChange}
                        name="student_from"
                        type="radio"
                        className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border text-custom-secondary transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-800 before:opacity-0 before:transition-opacity border-custom-secondary checked:border-custom-secondary checked:before:bg-custom-secondary hover:before:opacity-10"
                        value="other"
                        id="other"
                        defaultChecked=""
                      />
                      <span className="absolute transition-opacity opacity-0 pointer-events-none text-custom-secondary top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <circle data-name="ellipse" cx={8} cy={8} r={8} />
                        </svg>
                      </span>
                    </label>
                    <label
                      className="mt-px text-base font-semibold cursor-pointer select-none text-custom-secondary"
                      htmlFor="other"
                    >
                      Other
                    </label>
                  </div>
                </div>
                <div className="flex justify-center">
                  {" "}
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email}</span>
                  )}
                </div>

                <div className="flex mb-6">
                  <div className="flex items-center justify-center mr-3">
                    <AiOutlineMail size="24px" color="#EEF5DB" />
                  </div>
                  <input
                    onChange={handleFormChange}
                    autoComplete="off"
                    type="email"
                    value={data.email}
                    name="email"
                    className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                    placeholder="E-mail address"
                    required
                  ></input>
                </div>

                <div className="flex mb-6">
                  <div className="flex items-center justify-center mr-3">
                    <RiLockPasswordFill size="24px" color="#EEF5DB" />
                  </div>
                  <input
                    onChange={handleFormChange}
                    autoComplete="off"
                    type={icon === true ? "password" : "text"}
                    className="rounded-l-md outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    required
                  ></input>
                  <div
                    onClick={show}
                    className="rounded-r-md p-[2.6px] flex justify-center items-center bg-custom-light cursor-pointer text-[13px]"
                  >
                    {icon === true ? (
                      <AiFillEye size="20px" color="hsl(217,10%,25%)" />
                    ) : (
                      <BsEyeSlashFill size="20px" color="hsl(217,10%,25%)" />
                    )}
                  </div>
                </div>
                <div className="flex justify-center">
                  {" "}
                  {errors.tel && (
                    <span style={{ color: "red" }}>{errors.tel}</span>
                  )}
                </div>

                <div className="flex mb-6">
                  <div className="flex items-center justify-center mr-3">
                    <FiPhoneCall size="24px" color="#EEF5DB" />
                  </div>
                  <input
                    onChange={handleFormChange}
                    value={data.tel}
                    type="tel"
                    name="tel"
                    className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                    placeholder="Mobile number"
                    required
                    pattern="[0-9]{10}"
                  ></input>
                </div>

                <div className="flex items-center justify-center">
                  <div className="mr-3 flex justify-center items-center translate-y-[-10px]">
                    <BsGenderAmbiguous size="24px" color="#EEF5DB" />
                  </div>
                  <select
                    className="rounded h-[36px] mb-[24px] pl-[10px] w-full text-[13px] sm:text-[14px]"
                    name="Gender"
                    required
                    value={data.Gender}
                    onChange={handleFormChange}
                  >
                    <option label="Gender" value="" disabled="disabled"></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-[50%] px-4 py-2 bg-custom-secondary rounded-full transition duration-500 ease-in-out text-custom-primary hover:bg-custom-primary hover:text-custom-secondary"
                  >
                    Register
                  </button>
                </div>

                <div className="flex items-center justify-center mt-6">
                  <p className="mr-3 text-base text-custom-secondary">
                    Already Have An Account?
                  </p>
                  <Link
                    href="/auth/login"
                    className="text-base font-bold underline text-custom-secondary hover:text-custom-warm hover:scale-110"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
