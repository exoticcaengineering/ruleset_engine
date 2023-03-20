export const dummySchema: RuleSchema[] = [
  {
    name: "activities",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "category",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "country",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "departure_date",
    fieldType: "date",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "destination",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "duration",
    fieldType: "integer",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "lead_price",
    fieldType: "decimal",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "nights",
    fieldType: "integer",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "passengers",
    fieldType: "integer",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "price_range",
    fieldType: "array",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "price",
    fieldType: "decimal",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
  {
    name: "product_ids",
    fieldType: "integer",
    operators: ["equal", "not_equal"],
  },
  {
    name: "region",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "sort_order",
    fieldType: "string",
    operators: [
      "best_sales",
      "top_sales_adiona",
      "newest_products",
      "price_ascending",
      "price_descending",
      "duration_ascending",
      "duration_descending",
      "discount_ascending",
      "discount_descending",
      "departure_date_ascending",
      "departure_date_descending",
    ],
  },
  {
    name: "tags",
    fieldType: "string",
    operators: ["equal", "not_equal"],
  },
  {
    name: "travel_date",
    fieldType: "date",
    operators: ["equal", "not_equal", "greater_than", "less_than"],
  },
];
