"use client";

import { FormDataType } from "@/interfaces";
import { loginServices } from "@/services/authServices";
import useUserDataStore from "@/store";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";

function LoginForm() {
  const router = useRouter();
  const { setUserData, userData } = useUserDataStore();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormDataType) => {
    const response = await loginServices(data);
    setUserData(response);
    router.push("/dashboard");
    console.log("🚀 ~ onSubmit ~ response:", response);
    console.log(data);
  };

  useEffect(() => {
    if (userData?.token) {
      router.push("/dashboard");
    }
  }, []);
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-12 flex flex-col items-center justify-center w-full gap-5"
      >
        <h1>Login</h1>
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email no válido",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="email"
              label="Email"
              className="w-1/2"
              placeholder="cookZ@example.com"
            />
          )}
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Password es requerido",
            },
            minLength: {
              value: 8,
              message: "Password debe tener al menos 8 caracteres",
            },
            pattern: {
              value:
                /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-znÑ\d@$!%*?&#.-]{8,}$/,
              message:
                "Password debe tener al menos una mayúscula, una minúscula, un número y un carácter especial",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Password"
              className="w-1/2"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        <Button color="primary" type="submit">
          Login
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
