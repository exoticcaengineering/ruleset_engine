var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useEffect, useState } from "react";
import axios from "axios";
const useSchema = (url) => {
    const [schemaData, setSchemaData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchSchema = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { data } = yield axios.get(url);
                setSchemaData(data);
            }
            catch (error) {
                setError(error);
            }
            setLoading(false);
        });
        fetchSchema();
    }, [url]);
    return { schemaData, isLoading, error };
};
export default useSchema;
