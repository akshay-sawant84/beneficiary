import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputController } from "@/forms";
import Button from "@mui/material/Button";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

const MyForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputController
          name="name"
          control={control}
          label="Name"
          variant="outlined"
          rules={{ required: "Name is required" }}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : ""}
        />
      </div>
      <div>
        <InputController
          name="email"
          control={control}
          label="Email"
          variant="outlined"
          rules={{ required: "Email is required" }}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ""}
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default MyForm;
