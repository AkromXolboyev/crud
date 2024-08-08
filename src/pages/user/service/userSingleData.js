import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const userSingleData = (id) => {
  return useQuery({
    queryKey: ["single-data", id],
    queryFn: () => request.get(`/todos/${id}`).then((res) => res.data),
  });
};
