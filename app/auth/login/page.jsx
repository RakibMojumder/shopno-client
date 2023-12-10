"use client";

import { FcGoogle } from "react-icons/fc";
import { useState, useEffect } from "react";
import { useLoginUserMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/features/userSlice";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
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

    if (isLoading) {
      console.log("loading");
    }

    if (isError) {
      console.log("Error");
    }
  }, [data, dispatch, router, isError, isLoading]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser(formData);
  };

  return (
    <div className="sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto p-6 mt-8">
      <div>
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
        {/* <div className="flex items-center justify-between gap-4 my-6">
          <span className="w-full h-[1px] bg-neutral-400"></span>
          <span className="text-slate-600 text-lg">or</span>
          <span className="w-full h-[1px] bg-neutral-400"></span>
        </div>
        <div className="uppercase py-2 flex items-center justify-center gap-4 border border-primary text-neutral-600 rounded font-medium text-sm cursor-pointer">
          <FcGoogle size={24} />
          <p>Sign in with google</p>
        </div> */}
        <p className="my-7 text-sm text-center">
          Do not have an account?
          <Link href="/auth/register" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
