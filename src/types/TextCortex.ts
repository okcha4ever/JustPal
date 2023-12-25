interface TextCortexResponse {
  status: string;
  data: {
    outputs: Output[];
    remaining_credits: number;
  };
}

interface Output {
  index: number;
  text: string;
  id: string;
}

export default TextCortexResponse;
