import { createTypes } from 'reduxsauce';

export default createTypes(`
  PUSH_NEW_ROUTE
  REPLACE_ROUTE
  REPLACE_OR_PUSH_ROUTE
  POP_ROUTE
  POP_TO_ROUTE

  OPEN_DRAWER
  CLOSE_DRAWER
`);
