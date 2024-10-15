"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useRegisterUserMutation } from "@/redux/api/authApi";
import authImg from "@/public/assets/auth.png";
import PhoneInput from "react-phone-input-2";
import { useEffect, useState } from "react";
import Link from "next/link";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

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
            <h5 className="text-xs font-medium">Connect With Us</h5>
            <h2 className="text-3xl text-primary font-bold uppercase">
              Register
            </h2>
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
              {isLoading ? "Register..." : "Register"}
            </Button>
          </form>
          <p className="my-7 text-sm text-center">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
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
    </div>
  );
};

export default Register;
