import axios from "axios";
import { useMutation, type MutationFunction } from "react-query";
import { toast } from "sonner";

const useGenerateImage = () => {
  const handleRequest: MutationFunction<
    unknown,
    { description: string; id: string }
  > = async (variables) => {
    const { data }: { data: unknown } = await axios.post(
      "/api/stories/ai-image/generate",
      {
        description: variables.description,
        id: variables.id,
      },
    );
    return data;
  };

  const { mutateAsync, isLoading, status } = useMutation({
    mutationFn: handleRequest,
    onError: () => {
      toast.error("Something went wrong when generating image");
    },
  });

  return { mutateAsync, isLoading, status };
};

export default useGenerateImage;
