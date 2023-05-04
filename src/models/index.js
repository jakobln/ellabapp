// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Package, Note } = initSchema(schema);

export {
  Package,
  Note
};