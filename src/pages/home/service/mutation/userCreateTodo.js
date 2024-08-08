import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const userCreateTodo = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) => request.post("/todos", data).then((res) => res.data),
    onSuccess: () => {
      client.invalidateQueries(["get-todo"]);
    },
  });
};
