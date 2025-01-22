"use client";

import React, { useState } from "react";
import Link from "next/link";

import { LoginForm } from "./login-form";
import { SignupForm } from "./signup-form";
import { Button } from "../ui/button";
import { ResetForm } from "./reset-form";

type ModeType = "login" | "register" | "reset";

export const AuthForm = () => {
  const [mode, setMode] = useState<ModeType>("login");
  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight text-center">
          {mode === "reset"
            ? "Reset Password"
            : mode === "register"
            ? "Sign Up"
            : "Login"}
        </h1>
        <p className="text-sm text-muted-foreground text-center">
          {mode === "reset"
            ? "Enter Your Email Below to Reset your Password"
            : mode === "register"
            ? "Enter Your Information below to Create Account"
            : "Enter Your Email Below to Login to your Account"}
        </p>
        {mode === "login" && (
          <>
            <LoginForm />
            <div className="flex justify-between text-center flex-wrap">
              <Button
                onClick={() => setMode("register")}
                className="p-0"
                variant={"link"}
              >
                Need an Account? Sign Up
              </Button>
              <Button
                onClick={() => setMode("reset")}
                className="p-0"
                variant={"link"}
              >
                Forgot Password?
              </Button>
            </div>
          </>
        )}
        {mode === "reset" && (
          <>
            <ResetForm />
            <div className="text-center">
              <Button
                onClick={() => setMode("login")}
                className="p-0"
                variant={"link"}
              >
                Back To Login
              </Button>
            </div>
          </>
        )}
        {mode === "register" && (
          <>
            <SignupForm />
            <div className="text-center">
              <Button
                onClick={() => setMode("login")}
                className="p-0"
                variant={"link"}
              >
                Already Have an Account? Sign in
              </Button>
            </div>
            <p className="px-8 text-center text-muted-foreground">
              By Clicking Sign up Your Agree to Out{" "}
              <Link
                href={"#"}
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Server
              </Link>{" "}
              and{" "}
              <Link
                href={"#"}
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Server
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  );
};
