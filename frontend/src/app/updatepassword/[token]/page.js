"use client";
import React, { useEffect, useState } from "react";
import emailVerifyApi from "../../../api/emailVerify.api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import UpdatePassword from "../../components/AuthPage/UpdatePassword";
import updatePasswordApi from "../../../api/updatePassword.api";

const UpdatePasswordPage = ({ params }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const handleUpdatePasswordClick = async () => {
    if (password.length < 8) {
      toast.error(
        "Password should be atleast 8 characters having atleast a letter and numeric character"
      );
      return;
    }
    if (rePassword !== password) {
      toast.error("Password field is not matching");
      return;
    }
    const apiResult = await updatePasswordApi({
      token: params.token,
      password,
    });

    if (apiResult.success) {
      toast.success(apiResult.message);
      router.push("/auth/login");
    } else {
      toast.error(apiResult.message);
    }
  };
  return (
    <>
      <UpdatePassword
        password={password}
        setPassword={setPassword}
        rePassword={rePassword}
        setRePassword={setRePassword}
        handleUpdatePasswordClick={handleUpdatePasswordClick}
      />
    </>
  );
};

export default UpdatePasswordPage;
