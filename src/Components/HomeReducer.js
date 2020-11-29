import * as types from "./HomeActionType";
const initialState = {
  fetchingInvoiceList: false,
  fetchingInvoiceListError: false,
  invoiceList: [],
  addInvoiceModal: false,
  editInvoiceModal: false,
  currentInvoice: {},

  addingInvoice: false,
  addingInvoiceError: false,

  updatingInvoice: false,
  updatingInvoiceError: false,

  deletingInvoice: false,
  deletingupdatingInvoiceError: false,
};
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.HANDLE_ADD_INVOICE_MODAL:
      return { ...state, addInvoiceModal: action.payload };

    case types.HANDLE_EDIT_INVOICE_MODAL:
      return { ...state, editInvoiceModal: action.payload };
    case types.SET_CURRENT_ITEM:
      return { ...state, currentInvoice: action.payload };

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

    case types.ADD_INVOICE_REQUEST:
      return { ...state, addingInvoice: true };
    case types.ADD_INVOICE_SUCCESS:
      return {
        ...state,
        addingInvoice: false,
        addInvoiceModal: false,
        invoiceList: [...state.invoiceList, action.payload],
      };
    case types.ADD_INVOICE_FAILURE:
      return {
        ...state,
        addingInvoice: false,
        addingInvoiceError: true,
      };

    case types.UPDATE_INVOICE_REQUEST:
      return { ...state, updatingInvoice: true };
    case types.UPDATE_INVOICE_SUCCESS:
      return {
        ...state,
        updatingInvoice: false,
        editInvoiceModal: false,
        invoiceList: state.invoiceList.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, ...action.payload };
          } else {
            return item;
          }
        }),
      };
    case types.UPDATE_INVOICE_FAILURE:
      return {
        ...state,
        updatingInvoice: false,
        updatingInvoiceError: true,
      };

    case types.DELETE_INVOICE_REQUEST:
      return { ...state, deletingInvoice: true };
    case types.DELETE_INVOICE_SUCCESS:
      return {
        ...state,
        deletingInvoice: false,

        invoiceList: state.invoiceList.filter((item) => {
          return item.id !== action.payload.id;
        }),
      };
    case types.DELETE_INVOICE_FAILURE:
      return {
        ...state,
        deletingInvoice: false,
        deletingInvoiceError: true,
      };

    default:
      return state;
  }
};
