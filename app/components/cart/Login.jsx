"use client";

import Link from "next/link";
import Button from "../Button";
import Input from "../Input";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import Cookies from "js-cookie";
import scrollTop from "@/utils/scrollTop";

const Login = ({ setCurrentStep }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loginUser, { isLoading, data }] = useLoginUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data?.success) {
      Cookies.set("token", data.data.token);
      dispatch(setUser(data.data.user));
      setCurrentStep(1);
      scrollTop();
    } else {
      setError(data?.error);
    }
  }, [data, dispatch, setCurrentStep]);

  const handleLogin = async (e) => {
    e.preventDefault();
    loginUser(formData);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <m.div
      key={"login"}
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5 } }}
    >
      {error && (
        <div className="py-5 mb-7 bg-red-100/50 flex justify-center xl:items-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-red-400">
          <p className="text-red-500">{error}</p>
        </div>
      )}

      <h1 className="text-lg font-semibold mb-5">Login</h1>
      <form onSubmit={handleLogin} className="space-y-6">
        <Input
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit" size="large" variant="filled">
          Login
        </Button>
      </form>

      <p className="mt-7 text-sm text-center">
        Do not have an account?
        <Link href="/auth/register" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </m.div>
  );
};

export default Login;
