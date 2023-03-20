type RuleSchema = {
  name: string;
  fieldType: string;
  operators: string[];
};

type RuleValues = {
  name: string | null,
  operator: string | null,
  value: string | null,
}

