import axios from "axios";
import { useQuery } from "react-query";

type ProcessResult = {
  process_id: string;
  status: string;
  result: {
    output: string[];
  };
  credit_used: number;
  overage: number;
};
const useCheckImage = (image_status_url: string) => {
  const handleRequest = async () => {
    const { data }: { data: ProcessResult } = await axios.get(
      `/api/stories/ai-image/check?image_status_url=${image_status_url}`,
    );
    return data;
  };

  const { data, isLoading, status } = useQuery({
    queryKey: ["check-image", image_status_url],
    queryFn: handleRequest,
  });

  return { data, isLoading, status };
};

export default useCheckImage;
