import { RECORD_CUSTOMER } from "../reducers/recordCustomerReducer";

const recordCustomer = (customerData) => ({
  type: RECORD_CUSTOMER,
  customerData,
})

export default recordCustomer;
