export const RECORD_CUSTOMER = 'RECORD_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';

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
  case DELETE_CUSTOMER:
    const idIndex = state.customers.findIndex(({id}) => id === action.id)
    const lastIndex = state.customers.length;
    const newCustomers = [...state.customers.slice(0, idIndex), ...state.customers.slice(idIndex + 1, lastIndex)];
    return {
      ...state,
      customers: newCustomers,
    };
  default:
    return state;
  }
}