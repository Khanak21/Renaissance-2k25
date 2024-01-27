"use client";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsEyeSlashFill, BsGenderAmbiguous } from "react-icons/bs";
import { AiOutlineMail, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../Navbar/Navbar";
//import Background from "./Background";

const img = "/rene.png";

const Register = ({ data, setData, setPage }) => {
  const [icon, seticon] = useState(true);
 const [errors,setErr]=useState({})



 

  const validateForm = (formData) => {
    let errors = {};

    // Example validation rules, you can customize these as needed
    if (!formData.username.trim()) {
      errors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.tel.trim()) {
        errors.tel = "Telephone number is required";
      } else if (!isValidIndianPhoneNumber(formData.tel)) {
        errors.tel = "Invalid Indian telephone number";
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
    console.log(data);
  }

  //handling the submit and showing otp page
  function handleSubmit(e) {
  //  e.preventDefault();
   
    
    // Perform validation
    const validationErrors = validateForm(data);
    
    if (Object.keys(validationErrors).length === 0) {
      // No errors, submit the form
      setPage(2);
      // Your submission logic goes here
    } else {
        setErr(validationErrors)
      // There are errors, update the errors state
      console.log(validationErrors)
    }

  }

  return (
    <>
      <div className="bg-back w-full h-full">
        <div className=""></div>

        <div className="bg-[#1D174F] h-[190vh] w-screen h-screen flex justify-center p-[20px] pt-[10em] sm:pt-[10em] lg ">
       
          <div className=" w-screen opacity-[0.85] z-20 h-[50em] sm:w-[500px] sm:h-[50em] bg-[#EEF5DB] flex flex-col rounded p-[25px] sm:p-[50px]">
            <div className="mb-[25px] logo flex flex-col justify-center items-center w-full">
              <Image
                className=""
                width={700} // Set the width of the image
                height={250} // Set the height of the image
                src={img}
              ></Image>
              <h1 className="tracking-[1.2px] text-gray-500 font-medium mt-[10px] text-lg">
                Create Account💎
              </h1>
            </div>
            <div className="flex justify-center"> {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}</div>
        
            <div className="">
              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <FaUserCircle size="21px" color="#2F3E46" />
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
                 <div className="flex justify-center gap-10">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlfor="html"
                  >
                    <input
                      onChange={handleFormChange}
                      name="student_from"
                      value="mnnit"
                      type="radio"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer border-gray-900 appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    />
                    <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
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
                    className="mt-px font-semibold text-gray-700 cursor-pointer select-none"
                    htmlfor="html"
                  >
                    MNNIT Student
                  </label>
                </div>
                <div className="inline-flex items-center">
                  <label
                    className="relative flex items-center p-3 rounded-full cursor-pointer"
                    htmlfor="react"
                  >
                    <input
                      onChange={handleFormChange}
                      name="student_from"
                      type="radio"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-800 before:opacity-0 before:transition-opacity border-gray-900 checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                      value="other"
                      defaultChecked=""
                    />
                    <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
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
                    className="mt-px font-semibold text-gray-700 cursor-pointer select-none"
                    htmlfor="react"
                  >
                    Other
                  </label>
                </div>
              </div>
              <div className="flex justify-center"> {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}</div>
         
              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <AiOutlineMail size="21px" color="#2F3E46" />
                </div>
                <input
                  onChange={handleFormChange}
                  autoComplete="off"
                  type="email"
                  value={data.email}
                  name="email"
                  className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                  placeholder="E-Mail Address"
                  required
                ></input>
              </div>
         

              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <RiLockPasswordFill size="21px" color="hsl(217,10%,25%)" />
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
                  className="rounded-r-md p-[2.6px] flex justify-center items-center bg-white cursor-pointer text-[13px]"
                >
                  {icon === true ? (
                    <AiFillEye size="20px" color="hsl(217,10%,25%)" />
                  ) : (
                    <BsEyeSlashFill size="20px" color="hsl(217,10%,25%)" />
                  )}
                </div>
              </div>
              <div className="flex justify-center"> {errors.tel && <span style={{ color: 'red' }}>{errors.tel}</span>}</div>
         
              <div className="mb-[24px] flex">
                <div className="mr-[10px] flex justify-center items-center">
                  <FiPhoneCall size="21px" color="#2F3E46" />
                </div>
                <input
                  onChange={handleFormChange}
                  value={data.tel}
                  type="tel"
                  name="tel"
                  className="rounded outline-none w-full h-[36px] p-[10px] text-[13px] sm:text-[14px]"
                  placeholder="Mobile No."
                  required
                  pattern="[0-9]{10}"
                ></input>
              </div>
            
              <div className="mb-[24px] flex items-center justify-center">
                <div className="mr-[10px] flex justify-center items-center translate-y-[-10px]">
                  <BsGenderAmbiguous size="21px" color="#2F3E46" />
                </div>
                <select
                  className="rounded h-[36px] mb-[24px] pl-[10px] w-full text-[13px] sm:text-[14px]"
                  name="Gender"
                  required
                  value={data.Gender}
                  onChange={handleFormChange}
                >
                  <option
                    label="Gender"
                    value=""
                    disabled="disabled"
                    selected="selected"
                  ></option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full p-[5px] bg-[#1D174F] text-white rounded-full hover:bg-zinc-600"
              >
                Register
              </button>

              <div className="mt-[30px] flex justify-center items-center">
                <p className="text-[11.5px] sm:text-[14px] mr-[15px] tracking-[0.6px] text-[14px] text-gray-800">
                  Already Have An Account💎
                </p>
                <Link
                  href="/auth/login"
                  className="text-[11.5px] sm:text-[14px] font-bold ml-[15px] tracking-[1px] text-[14px] text-back hover:text-slate-600"
                >
                  Log-In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
