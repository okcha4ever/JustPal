import { type User, type Story } from "@prisma/client";
import axios from "axios";
import { useQuery } from "react-query";

const useGetStories = () => {
  const handleRequest = async () => {
    const { data }: { data: (Story & { user: User })[] } =
      await axios.get(`/api/stories`);
    return data;
  };

  const { data, isLoading, status } = useQuery({
    queryKey: ["stories"],
    queryFn: handleRequest,
  });

  return { data, isLoading, status };
};

export default useGetStories;
