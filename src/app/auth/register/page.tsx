"use client";
import { useForm } from "react-hook-form";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import React from "react";

// Define the structure of your form data
type RegisterFormData = {
  name: string;
  email: string;
  password: string;
};

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const router = useRouter();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await axios.post("http://localhost:8000/api/register", data);
      router.push("/auth/login");
    } catch {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6">
      <Input
        label="Name"
        name="name"
        type="text"
        register={register}
        error={errors.name?.message}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        register={register}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        register={register}
        error={errors.password?.message}
      />
      <Button type="submit">Register</Button>
    </form>
  );
}
