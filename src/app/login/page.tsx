import React from "react";
import { redirect } from "next/navigation";
import RegisterForm from "./Form";
import LoginForm from "./Form";
import { auth } from "@/auth";
import GoogleLoginButton from "@/components/oauth/GoogleLoginButton";

const page = async () => {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }

  return (
    <section className="container flex items-center justify-center py-5">
      <div>
        <LoginForm />
      </div>
    </section>
  );
};

export default page;
