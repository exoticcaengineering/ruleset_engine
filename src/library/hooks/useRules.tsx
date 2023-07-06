import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { parseRulesetResponse } from "../utilities/parseRulesetResponse";

type CallError = {
  message: string;
  code: string;
};

const options = {
  withCredentials: true,
  headers: {
    cookie:
      "G_ENABLED_IDPS=google; _hjid=b3f8f0d2-85da-46ff-b7e6-f680e09defb6; _hjSessionUser_2285668=eyJpZCI6IjkwZDQ2NzViLTU0MTktNWY4OS1iOWU0LWJmYWY2Y2RlOTFkYSIsImNyZWF0ZWQiOjE2NDA3NzQ5MDM2MzYsImV4aXN0aW5nIjp0cnVlfQ==; _ex_gtm_employee=true; adiV=10277383; _gcl_au=1.1.530920154.1640779457; _ga_P46KE5C14Q=GS1.1.1642409769.1.0.1642409769.60; _gaexp=GAX1.2.jhmS17wCR32I_Qy8avJWaQ.19050.0!SAbyFgODTkKIM7WO8QBCPg.19040.0; _hjSessionUser_1310244=eyJpZCI6ImU1MTFkYmU1LTUyNmYtNTA2YS04OTAxLWUyN2NjNGY3OGZmYSIsImNyZWF0ZWQiOjE2NDMyMTQ4OTMxODAsImV4aXN0aW5nIjp0cnVlfQ==; _hjSessionUser_922367=eyJpZCI6Ijk0ZjkwNzM4LTYyYzYtNTc4Yi05NTI5LWQyNjNjOGU5ZmJmYiIsImNyZWF0ZWQiOjE2NDM3MTc5MzIzNzgsImV4aXN0aW5nIjp0cnVlfQ==; _ga_FGF23X494Q=GS1.1.1643907702.1.1.1643908778.60; _gid=GA1.2.762033289.1645444098; _ga_487HNCPBES=GS1.1.1645542654.12.1.1645544317.52; _ga_307RR3NMV2=GS1.1.1645545946.47.1.1645547913.0; exoticca_usr_adm=706|82308753bd4d0aa5d359b4489cbadcc0; FPID=FPID2.2.PY3xUVV6Tvedt%2F82snKR1JAtcM%2FkSQgpYh%2F1xR0PLNo%3D.1645705336; _ga_ME77EE605V=GS1.1.1645708227.15.0.1645708227.60; FPLC=BkoO6iFPLl8CMAVepZC9zXb9acnjlW6eg6oRJpX5Ra2oc7fBZI5uoaecnYk6S0NQ%2F4NKk2LaAUwArgZcDnWk85SuVdG5qgPLkDEXr5vmh0Otks7BdqtBBMpL45cwhw%3D%3D; _ga=GA1.1.68919515.1645705336; _ga_8S10FQZ6KB=GS1.1.1645787183.19.0.1645787444.60; _ga_6W2KMNZ8Y1=GS1.1.1645708212.24.1.1645708227.45",
  },
};

const useRules = (
  url: string,
  discountUuid: string,
  discountName: string,
  rulesetType: RulesetType
) => {
  const [existingRules, setRules] = useState<RuleValues[]>([]);
  const [rulesetUuid, setUuid] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<CallError | undefined>();

  const uuidKey = rulesetType === "discount_tool" ? 'discountUuid' : 'landingGeneratorUuid'
  const uuidParam = rulesetType === "discount_tool" ? 'discountUuid' : 'landingUuid'

  const addRule = (newRule: RuleValues) => {
    setRules((prev) => [...prev, newRule]);
    const payload = {
      [uuidKey]: discountUuid,
      name: discountName.replace(/\s/g, ""),
      description: discountName,
      rulesetType: rulesetType,
      active: true,
      startsOn: null,
      endsOn: null,
      rulesetField: newRule.name,
      rulesetOperator: newRule.operator,
      value: newRule.value,
    };
    axios.post(`${url}/${rulesetUuid || uuidv4()}`, payload);
  };

  const removeRule = (rulesetField: string, rulesetOperator: string) => {
    const updatedRules = existingRules.filter((i) => i.name !== rulesetField);
    setRules(updatedRules);
    const payload = {
      rulesetUuid,
      rulesetField,
      rulesetOperator,
    };
    axios.delete(`${url}/ruleset-setting`, {
      headers: options.headers,
      data: payload,
    });
  }

  useEffect(() => {
    const fetchRuleset = async () => {
      try {
        const { data } = await axios.get<ResponseData>(
          `${url}?${uuidParam}=${discountUuid}`,
          options
        );
        console.log('fetchRules data: ', data)
        setRules(parseRulesetResponse(data));
        setUuid(data[0].uuid);

      } catch (error) {
        setError(error as CallError);
        setRules([]);
      }
      setLoading(false);
    };

    fetchRuleset();

  }, [discountUuid, url, uuidParam]);

  return {
    existingRules,
    setRules,
    addRule,
    removeRule,
    loadingRules: isLoading,
    errorRules: error,
  };
};

export default useRules;
