// map response data to format used by front
export const parseRulesetResponse = (
  responseData: ResponseData
): RuleValues[] => {
  const rules: RuleValues[] = [];
  console.log("responseData: ", responseData);
  responseData[0].schema.map((rule: RulesetSchemaObject) => {
    const {
      schema: { field, type },
      current: { operator, value },
    } = rule;

    return rules.push({ name: field, fieldType: type, operator, value });
  });
  console.log("parsed rules :", rules);
  return rules;
};
