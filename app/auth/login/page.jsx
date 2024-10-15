"use client";

import { useState, useEffect } from "react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import authImg from "@/public/assets/auth.png";
import Image from "next/image";
import CredentialsDemo from "@/app/components/modal/CredentialsDemo";
import { AnimatePresence } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const LoginPage = () => {
  const router = useRouter();
  const [seeDemo, setSeeDemo] = useState(false);
  const [loginError, setLogError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading, isError, data }] = useLoginUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      if (data.success) {
        Cookies.set("token", data.data.token, { expires: 1 });
        dispatch(setUser(data.data.user));
        router.push("/");
      } else {
        setLogError(data.error);
        console.log(data);
      }
    }
  }, [data, dispatch, router, isError, isLoading]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  const handleSeeDemoCredentials = () => {
    setSeeDemo(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 h-screen">
      <div className="col-span-1 lg:col-span-5 flex flex-col justify-center items-center bg-white p-5">
        <div className="text-left w-[400px] mb-14 text-neutral-500">
          <button
            onClick={() => router.push("/")}
            className="flex items-center space-x-3"
          >
            <MdOutlineKeyboardBackspace size={24} />
            <span> Back Home</span>
          </button>
        </div>
        <div className="w-[400px]">
          <div className="text-center mb-8">
            <h5 className="text-xs font-medium">Welcome Back</h5>
            <h2 className="text-3xl text-primary font-bold uppercase">Login</h2>
          </div>
          {loginError && (
            <div className="py-5 mb-7 bg-red-100/50 flex justify-center items-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-red-400">
              <p className="text-red-500">{loginError}</p>
            </div>
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
              {isLoading ? "Login..." : "Login"}
            </Button>
          </form>
          <p className="my-7 text-sm text-center">
            Do not have an account?
            <Link
              href="/auth/register"
              className="text-primary hover:underline ml-1"
            >
              Sign up
            </Link>
          </p>

          <Button
            size="large"
            variant="filled"
            handleClick={handleSeeDemoCredentials}
            className="bg-red-600 border-none"
          >
            Demo credentials
          </Button>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-7 h-full hidden md:flex justify-center items-center">
        <Image
          alt="auth image"
          src={authImg}
          height={640}
          width={480}
          priority
        />
      </div>

      <AnimatePresence>
        {seeDemo && <CredentialsDemo setSeeDemo={setSeeDemo} />}
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;
