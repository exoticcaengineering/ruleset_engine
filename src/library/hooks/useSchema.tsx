import { useEffect, useState } from "react";
import axios from "axios";

type CallError = {
    message: string;
    code: string;
}

const useSchema = (url: string) => {
  const [schemaData, setSchemaData] = useState<RuleSchema[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<CallError | undefined>();

  useEffect(() => {
    const fetchSchema = async () => {
      try {
        const { data } = await axios.get(url);
        setSchemaData(data);
      } catch (error) {
        setError(error as CallError);
      }

      setLoading(false);
    };
    fetchSchema();
  }, [url]);

  return { schemaData, isLoading, error };
};

export default useSchema;