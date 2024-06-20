import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  gender: z.string().nonempty("Gender is required"),
});

const MyForm = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema, {
      errorMap: {
        gender: {
          nonempty: "Please select a gender", // Custom error message for nonempty validation
        },
      },
    }),
    defaultValues: {
      gender: "", // Initial value if needed
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="gender">Gender</label>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            id="gender"
            onChange={(e) => field.onChange(e.target.value)}
            onBlur={field.onBlur} // Ensure onBlur is passed to handle touched state
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        )}
      />
      {errors.gender && <p style={{ color: "red" }}>{errors.gender.message}</p>}
      <button type="submit">Submit</button>
      <button type="button" onClick={() => reset()}>
        Reset
      </button>
    </form>
  );
};

export default MyForm;
