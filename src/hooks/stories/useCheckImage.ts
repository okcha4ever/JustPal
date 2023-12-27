import axios from "axios";
import { useQuery } from "react-query";

const useCheckImage = (image_status_url: string) => {
  const handleRequest = async () => {
    const { data }: { data: unknown } = await axios.get(
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
