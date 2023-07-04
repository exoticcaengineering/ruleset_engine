declare type RulesetType = 'discount_tool' | 'landing_generator' | 'automate_product_card'

type RuleSchema = {
  name: string;
  fieldType: string;
  operators: string[];
};

type RuleValues = {
  name: string | null;
  operator: string | null;
  value: string | null;
};

type RulesetSchemaObject =  {
  current: {
    value: string;
    operator: string;
  },
  schema : {
    field: string;
    operators: string[];
    type: string;
  }
}
type RulesetData = {
  uuid: string;
  schema: RulesetSchemaObject[];
};
type ResponseData = RulesetData[];
