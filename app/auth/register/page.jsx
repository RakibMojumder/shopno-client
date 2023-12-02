"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { motion as m } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });
  const [registerUser, { isLoading, isSuccess, data }] =
    useRegisterUserMutation(formData);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!data?.success) {
      setError(data?.error);
    }
    if (data?.success) {
      router.push("/auth/login");
    }
  }, [isLoading, data?.error, data?.success, isSuccess, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    registerUser(formData);
  };
  return (
    <m.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
      className="sm:w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto p-6 mt-8"
    >
      <div className="text-center mb-8">
        <h5 className="text-xs font-medium">Connect With Us</h5>
        <h2 className="text-3xl text-primary font-bold uppercase">Register</h2>
      </div>

      {error && (
        <div className="py-5 mb-7 bg-red-100/50 flex justify-center items-center relative after:absolute after:top-0 after:left-0 after:h-full after:w-1 after:bg-red-400">
          <p className="text-red-500">{error}</p>
        </div>
      )}
      <form onSubmit={handleRegister} className="space-y-6">
        <Input
          type="text"
          name="username"
          label="Your Name"
          value={formData.username}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          label="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <PhoneInput
          country={"bd"}
          value={formData.phone}
          onChange={(phone) => setFormData({ ...formData, phone: phone })}
          inputStyle={{
            border: "none",
            width: "100%",
          }}
          containerStyle={{
            width: "100%",
            height: "44px",
            border: "1px solid #1E1E1E",
            borderRadius: "4px",
          }}
          buttonStyle={{
            border: "none",
            borderRight: "none",
          }}
          dropdownStyle={{
            width: "330px",
          }}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button type="submit" size="large" variant="filled">
          {isLoading ? "loading" : "Register"}
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
        Already have an account?{" "}
        <Link href="/auth/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </m.div>
  );
};

export default Register;
