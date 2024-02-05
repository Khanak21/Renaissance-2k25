"use client";
import React, { useEffect, useState } from "react";
import emailVerifyApi from "../../../api/emailVerify.api";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const VerifyEmail = ({ params }) => {
  const [apiCalled, setApiCalled] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (apiCalled === false) {
      emailVerifyApi({ token: params.token }).then((data) => {
        if (data.success == true) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }
        router.push("/");
      });
      setApiCalled(true);
    }
  }, []);
  return (
    <div>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{ success: { duration: 5000 } }}
      />
      <p>verifying email......</p>
    </div>
  );
};

export default VerifyEmail;
