import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetTodos = () => {
  return useQuery({
    queryKey: ["get-todo"],
    queryFn: () => request.get("/todos").then((res) => res.data),
  });
};
