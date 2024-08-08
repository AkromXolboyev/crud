import React from "react";
import { useParams } from "react-router-dom";
import { userSingleData } from "./service/userSingleData";

export const User = () => {
  const { id } = useParams();
  const { data, isLoading } = userSingleData(id);
  

  return <div>{isLoading ? <h1>loading...</h1> : <h1>{data?.title}</h1>}</div>;
};
