import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { userSingleData } from "../user/service/userSingleData";
import { Form } from "./form";
import { useEditTodo } from "./service/useEditTodo";

export const ChangeTodo = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);
  const { mutate } = useEditTodo(id);
  const submit = (value) => {
    mutate(value, {
      onSuccess: () => {
        navigate('/')
      },
    })
  };

  return (
    <>
      <div style={{
        width:"1200px",margin:"auto"
      }}>
        {isLoading ? <h1>loading...</h1> : <Form  submit={submit} {...data} />}
      </div>
    </>
  );
};
