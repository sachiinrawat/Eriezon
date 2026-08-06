import { type SchemaTypeDefinition } from "sanity";
import { categoryType } from "./category";
import { productType } from "./product";
import { cropType } from "./crop";
import { newsType } from "./news";

export const schemaTypes: SchemaTypeDefinition[] = [
  categoryType,
  productType,
  cropType,
  newsType,
];
