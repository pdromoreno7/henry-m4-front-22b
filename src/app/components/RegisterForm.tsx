"use client";

import { FormData } from "@/interfaces";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";

function RegisterForm() {
  const {
    handleSubmit,
    control,
    formState: { errors },
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

  const onSubmit = (data: FormData) => {
    console.log(data);
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
        </Button>
      </form>
    </div>
  );
}

export default RegisterForm;
