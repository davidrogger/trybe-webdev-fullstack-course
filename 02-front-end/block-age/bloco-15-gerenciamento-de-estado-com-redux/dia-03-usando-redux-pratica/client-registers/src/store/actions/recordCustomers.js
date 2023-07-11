import { RECORD_CUSTOMER } from "../reducers/recordCustomerReducer";
import { DELETE_CUSTOMER } from "../reducers/recordCustomerReducer";

export const recordCustomer = (customerData) => ({
  type: RECORD_CUSTOMER,
  customerData,
})

export const deleteCustomer = (id) => ({
  type: DELETE_CUSTOMER,
  id,
})
