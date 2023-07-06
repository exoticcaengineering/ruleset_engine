declare type RulesetType = 'discount_tool' | 'landing_generator' | 'automate_product_card'

type RuleSchema = {
  name: string;
  fieldType: FieldType;
  operators: string[];
};

type RuleValues = {
  name: string | null;
  operator: string | null;
  value: any;
  fieldType: FieldType;
};

type RulesetSchemaObject =  {
  current: {
    value: string;
    operator: string;
  },
  schema : {
    field: string;
    operators: string[];
    type: FieldType;
  }
}
type RulesetData = {
  uuid: string;
  schema: RulesetSchemaObject[];
};
type ResponseData = RulesetData[];

type FieldType = 'array' | 'string' | 'number' | 'date' | 'number_range' | undefined;