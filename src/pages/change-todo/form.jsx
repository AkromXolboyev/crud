import React from "react";
import { useForm } from "react-hook-form";

export const Form = ({ title, description, submit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { title, description },
  });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input {...register("title")} type="text" />
      </div>
      <div>
        <input {...register("description")} type="text" />
      </div>
      <button type="submit">send</button>
    </form>
  );
};
