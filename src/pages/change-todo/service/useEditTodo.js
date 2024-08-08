import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useEditTodo = (id) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (data) =>
      request.put(`/todos/${id}`, data).then((res) => res.data),
  });
};
