// map response data to format used by front
export const parseRulesetResponse = (responseData) => {
    const rules = [];
    console.log('responseData: ', responseData);
    responseData[0].schema.map((rule) => {
        const { schema: { field }, current: { operator, value }, } = rule;
        return rules.push({ name: field, operator, value });
    });
    console.log('parsed rules :', rules);
    return rules;
};
