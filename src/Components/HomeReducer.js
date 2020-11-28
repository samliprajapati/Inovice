import * as types from "./HomeActionType";
const initialState = {
  fetchingInvoiceList: false,
  fetchingInvoiceListError: false,
  invoiceList: [],
  addInvoiceModal: false,
  editInvoiceModal: false,
  currentInvoice: {},
};
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ADD_INVOICE_MODAL:
      return { ...state, addInvoiceModal: action.payload };

    case types.HANDLE_EDIT_INVOICE_MODAL:
      return { ...state, editInvoiceModal: action.payload };

    case types.GET_INVOICE_LIST_REQUEST:
      return { ...state, fetchingInvoiceList: true };
    case types.GET_INVOICE_LIST_SUCCESS:
      return {
        ...state,
        fetchingInvoiceList: false,
        invoiceList: action.payload,
      };
    case types.GET_INVOICE_LIST_FAILURE:
      return {
        ...state,
        fetchingInvoiceList: false,
        fetchingInvoiceListError: true,
      };

    default:
      return state;
  }
};
