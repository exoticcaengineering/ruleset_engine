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
const options = {
    withCredentials: true,
    headers: {
        cookie: 'G_ENABLED_IDPS=google; _hjid=b3f8f0d2-85da-46ff-b7e6-f680e09defb6; _hjSessionUser_2285668=eyJpZCI6IjkwZDQ2NzViLTU0MTktNWY4OS1iOWU0LWJmYWY2Y2RlOTFkYSIsImNyZWF0ZWQiOjE2NDA3NzQ5MDM2MzYsImV4aXN0aW5nIjp0cnVlfQ==; _ex_gtm_employee=true; adiV=10277383; _gcl_au=1.1.530920154.1640779457; _ga_P46KE5C14Q=GS1.1.1642409769.1.0.1642409769.60; _gaexp=GAX1.2.jhmS17wCR32I_Qy8avJWaQ.19050.0!SAbyFgODTkKIM7WO8QBCPg.19040.0; _hjSessionUser_1310244=eyJpZCI6ImU1MTFkYmU1LTUyNmYtNTA2YS04OTAxLWUyN2NjNGY3OGZmYSIsImNyZWF0ZWQiOjE2NDMyMTQ4OTMxODAsImV4aXN0aW5nIjp0cnVlfQ==; _hjSessionUser_922367=eyJpZCI6Ijk0ZjkwNzM4LTYyYzYtNTc4Yi05NTI5LWQyNjNjOGU5ZmJmYiIsImNyZWF0ZWQiOjE2NDM3MTc5MzIzNzgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_FGF23X494Q=GS1.1.1643907702.1.1.1643908778.60; _gid=GA1.2.762033289.1645444098; _ga_487HNCPBES=GS1.1.1645542654.12.1.1645544317.52; _ga_307RR3NMV2=GS1.1.1645545946.47.1.1645547913.0; exoticca_usr_adm=706|82308753bd4d0aa5d359b4489cbadcc0; FPID=FPID2.2.PY3xUVV6Tvedt%2F82snKR1JAtcM%2FkSQgpYh%2F1xR0PLNo%3D.1645705336; _ga_ME77EE605V=GS1.1.1645708227.15.0.1645708227.60; FPLC=BkoO6iFPLl8CMAVepZC9zXb9acnjlW6eg6oRJpX5Ra2oc7fBZI5uoaecnYk6S0NQ%2F4NKk2LaAUwArgZcDnWk85SuVdG5qgPLkDEXr5vmh0Otks7BdqtBBMpL45cwhw%3D%3D; _ga=GA1.1.68919515.1645705336; _ga_8S10FQZ6KB=GS1.1.1645787183.19.0.1645787444.60; _ga_6W2KMNZ8Y1=GS1.1.1645708212.24.1.1645708227.45'
    },
};
const useSchema = (url) => {
    const [schemaData, setSchemaData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() => {
        const fetchSchema = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                console.log(options);
                const { data } = yield axios.get(url, options);
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
