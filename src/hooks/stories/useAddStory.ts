import { queryClient } from "@/providers/MyReactQueryProvider";
import { type Story } from "@prisma/client";
import axios from "axios";
import { useMutation, type MutationFunction } from "react-query";
import { toast } from "sonner";

const useAddStory = () => {
  const handleRequest: MutationFunction<Story, { keywords: string[] }> = async (
    variables,
  ) => {
    const { data }: { data: Story } = await axios.post("/api/stories/add", {
      keywords: variables.keywords,
    });
    return data;
  };

  const { mutateAsync, isLoading, status } = useMutation({
    mutationFn: handleRequest,
    onMutate: () => {
      toast.loading("Adding your story...");
    },
    onSuccess: async () => {
      toast.success("Successfully added your story");
    },
    onError: () => {
      toast.error("Oops! something went wrong when adding your story");
    },
    onSettled: async () => {
      await queryClient.invalidateQueries("stories");
    },
  });

  return { mutateAsync, isLoading, status };
};

export default useAddStory;
