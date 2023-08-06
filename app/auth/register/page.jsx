"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import { motion as m } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [error, setError] = useState("");
  const [registerUser, { isLoading, isSuccess, data }] =
    useRegisterUserMutation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  //   useEffect(() => {
  //     if (isLoading) {
  //       return;
  //     }

  //     if (!data?.success) {
  //       setError(data?.error);
  //     }
  //     if (data?.success) {
  //       setActiveAuth("login");
  //     }
  //   }, [isLoading, data?.error, data?.success, setActiveAuth, isSuccess]);

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
      className="w-1/4 mx-auto p-6"
    >
      <div className="text-center mb-8">
        <h5 className="text-xs font-medium">Connect With Us</h5>
        <h2 className="text-3xl text-primary font-bold uppercase">Register</h2>
      </div>

      {error && <p className="text-center mb-5 text-red-500">{error}</p>}
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
            height: "40px",
            border: "1px solid #7C3AED",
            borderRadius: "4px",
          }}
          buttonStyle={{
            border: "none",
            borderRight: "1px solid #7C3AED",
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
