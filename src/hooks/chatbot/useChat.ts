import axios from "axios";
import { useMutation, type MutationFunction } from "react-query";
import { toast } from "sonner";

const useChat = () => {
  const handleRequest: MutationFunction<string, string> = async (message) => {
    const { data }: { data: string } = await axios.post("/api/chatbot/talk", {
      prompt: message,
    });
    return data;
  };
  const { mutateAsync, isLoading, status, data } = useMutation({
    mutationFn: handleRequest,
    onError: () => {
      toast.error("Something went wrong when talking to PalChat");
    },
  });
  console.log(data);
  return { mutateAsync, isLoading, status, data };
};

export default useChat;
