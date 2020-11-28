import * as types from "./HomeActionType";

const dummyData = [
  {
    companyDetails: "InnoverenIT",
    customerDetails: "samli prajapati",
    invoiceNumber: "1001",
    listItems: "laptop",
    subTotal: "50000",
    Total: "48000",
    tax: "10000",
    discount: "1",
  },
];

export const getInvoiceList = () => (dispatch) => {
  dispatch({
    type: types.GET_INVOICE_LIST_REQUEST,
  });

  dispatch({
    type: types.GET_INVOICE_LIST_SUCCESS,
    payload: dummyData,
  });

  dispatch({
    type: types.GET_INVOICE_LIST_FAILURE,
  });
};

export const handleAddInvoiceModal = (modalProps) => (dispatch) => {
  debugger;
  dispatch({
    type: types.HANDLE_ADD_INVOICE_MODAL,
    payload: modalProps,
  });
};

export const handleEditInvoiceModal = (modalProps) => (dispatch) => {
  dispatch({
    type: types.HANDLE_EDIT_INVOICE_MODAL,
    payload: modalProps,
  });
};
