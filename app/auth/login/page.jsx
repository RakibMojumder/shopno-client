"use client";

import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const [loginError, setLogError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading, data }] = useLoginUserMutation();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (data.success) {
        Cookies.set("token", data.data.token);
        dispatch(setUser(data.data.user));
        router.push("/");
      }
    }
  }, [data, dispatch, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <div className="w-1/4 mx-auto p-6">
      <div className="text-center mb-8">
        <h5 className="text-xs font-medium">Welcome Back</h5>
        <h2 className="text-3xl text-primary font-bold uppercase">Login</h2>
      </div>
      {loginError && (
        <p className="text-center mb-5 text-red-500">{loginError}</p>
      )}

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
      <div className="flex items-center justify-between gap-4 my-6">
        <span className="w-full h-[1px] bg-neutral-400"></span>
        <span className="text-slate-600 text-lg">or</span>
        <span className="w-full h-[1px] bg-neutral-400"></span>
      </div>
      <div className="uppercase py-2 flex items-center justify-center gap-4 border border-primary text-neutral-600 rounded font-medium text-sm cursor-pointer">
        <FcGoogle size={24} />
        <p>Sign in with google</p>
      </div>
      <p className="my-7 text-sm text-center">
        Do not have an account?
        <Link href="/auth/register" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
