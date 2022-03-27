export const RECORD_CUSTOMER = 'RECORD_CUSTOMER';

const INITIAL_STATE = {
  customers: [],
}

export const recordCustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECORD_CUSTOMER:
    return {
      ...state,
      customers: [ ...state.customers, action.customerData ],
    };
  default:
    return state;
  }
}