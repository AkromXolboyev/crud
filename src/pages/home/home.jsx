import React from "react";
import { useGetTodos } from "./service/query/useGetTodos";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { userCreateTodo } from "./service/mutation/userCreateTodo";

export const Home = () => {
  const { isLoading, data } = useGetTodos();
  const { mutate, isPending } = userCreateTodo();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    mutate(data, {
      onSuccess: () => {
        console.log("done");
      },
    });
    reset();
  };
  return (
    <div style={{
      border: "1px solid red",
      width: "1200px",
      margin: "auto"

    }}>
      <form style={{
       
        margin: "auto", alignItems: "center"
      }} onSubmit={handleSubmit(submit)}>
        <div style={{
          margin: "auto",
          padding: "10px",
          width:"200px"
        }}>
          <input style={{padding:"10px"}} {...register("title")} type="text" />
        </div>
        <div style={{
          margin: "auto",
          padding: "10px",
          width:"200px"
        }}>
          <input style={{padding:"10px"}}  {...register("description")} type="text" />
        </div>
        <button style={{margin:"auto",width:"100px", marginLeft:"550px",padding:"10px"}} type="submit">send</button>
      </form>
      {isPending ? <p>loading</p> : ""}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {data?.map((item) => (
            <div
              style={{
                border: "1px solid red",
                display: "flex",
                justifyContent: "space-between",
              }}
              key={item.id}
            >
              <Link to={`/user/${item.id}`}>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
              </Link>
              <button
                onClick={() => navigate(`/change-todo/${item.id}`)}
                style={{ cursor: "pointer",width:"100px",height:"50px",marginTop:"12px" }}
              >
                edit{" "}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
