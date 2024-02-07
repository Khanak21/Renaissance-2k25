"use client";
import React, { useEffect } from "react";
import emailVerifyApi from "../../../api/emailVerify.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const VerifyEmail = ({ params }) => {
  const router = useRouter();
  useEffect(() => {
    emailVerifyApi({ token: params.token }).then((data) => {
      if (data.success == true) {
        const token = apiResult.data.accessToken;
        localStorage.setItem("token", token);
        toast.success(data.message);
        window.location.href = "/";
      } else {
        toast.error(data.message);
        window.location.href = "/";
      }
    });
  }, []);
  return (
    <div>
      <p>verifying email......</p>
    </div>
  );
};

export default VerifyEmail;
