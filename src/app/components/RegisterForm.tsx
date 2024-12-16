"use client";

import { RegisterFormType } from "@/interfaces";
import { registerUser } from "@/services/authServices";
import useUserDataStore from "@/store";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

import { useForm, Controller } from "react-hook-form";
import { Loader2 } from "lucide-react";

function RegisterForm() {
  const { userData } = useUserDataStore();
  const router = useRouter();
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (userData?.token) {
      router.push("/dashboard");
    }
  }, []);

  const onSubmit = async (data: RegisterFormType) => {
    const res = await registerUser(data);
    if (res) toast("Usuario registrado con exito");
    router.push("/sign-in");
  };

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4 h-[100vh]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-12 flex flex-col items-center justify-center w-full gap-5"
      >
        <h1>Register</h1>

        {/* Name */}
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El nombre es requerido",
            },
            minLength: {
              value: 3,
              message: "El nombre debe tener al menos 3 caracteres",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Nombre"
              className="w-1/2"
              placeholder="John Doe"
            />
          )}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        {/* Email */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El email es requerido",
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "El email no es válido",
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

        {/* Password */}
        <Controller
          name="password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
            pattern: {
              value:
                /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[@$!%*?&#.])[A-Za-znÑ\d@$!%*?&#.-]{8,}$/,
              message:
                "La contraseña debe tener al menos una mayúscula, una minúscula, un número y un carácter especial",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              label="Contraseña"
              className="w-1/2"
            />
          )}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        {/* Address */}
        <Controller
          name="address"
          control={control}
          rules={{
            required: {
              value: true,
              message: "La dirección es requerida",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="text"
              label="Dirección"
              className="w-1/2"
              placeholder="123 Calle Principal"
            />
          )}
        />
        {errors.address && (
          <span className="text-red-500">{errors.address.message}</span>
        )}

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{
            required: {
              value: true,
              message: "El teléfono es requerido",
            },
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: "El teléfono debe tener entre 10 y 15 dígitos",
            },
          }}
          render={({ field }) => (
            <Input
              {...field}
              type="tel"
              label="Teléfono"
              className="w-1/2"
              placeholder="3001234567"
            />
          )}
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        <Button color="primary" type="submit">
          Register
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
