import type NewsItem from "@/types/NewsItem";
import axios from "axios";
import { useQuery } from "react-query";

const useGetNews = () => {
  const handleRequest = async () => {
    const { data }: { data: NewsItem[] } = await axios.get(
      "http://localhost:8000/scrape",
    );
    return data;
  };

  const { data, isLoading, status } = useQuery({
    queryKey: ["scraped-news"],
    queryFn: handleRequest,
  });

  return { data, isLoading, status };
};

export default useGetNews;
