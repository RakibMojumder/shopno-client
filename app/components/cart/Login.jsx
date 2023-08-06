"use client";

import Link from "next/link";
import Button from "../Button";
import Input from "../Input";
import { motion as m } from "framer-motion";

const Login = ({ setCurrentStep }) => {
  const handleLogin = () => {};
  const handleChange = () => {};

  return (
    <m.div
      key={"login"}
      initial={{ y: 0 }}
      exit={{ y: "-100%", transition: { duration: 0.5 } }}
      className="p-10"
    >
      {/* {loginError && (
          <p className="text-center mb-5 text-red-500">{loginError}</p>
        )} */}

      <form onSubmit={handleLogin} className="space-y-6">
        <Input
          type="email"
          name="email"
          label="Email"
          //   value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          label="Password"
          //   value={formData.password}
          onChange={handleChange}
        />
      </form>
      <Button
        handleClick={() => setCurrentStep((prev) => prev + 1)}
        type="submit"
        size="large"
        variant="filled"
      >
        Login
      </Button>
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
