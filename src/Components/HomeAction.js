import * as types from "./HomeActionType";

const dummyData = [
  {
    companyDetails: "InnoverenIT",
    customerDetails: "samli prajapati",
    invoiceNumber: "1001",
    listItems: "laptop",
    subTotal: "50000",
    total: "48000",
    tax: "10000",
    discount: "1",
    id: Date.now(),
  },
];

export const getInvoiceList = () => (dispatch) => {
  dispatch({
    type: types.GET_INVOICE_LIST_REQUEST,
  });
  if (dummyData) {
    dispatch({
      type: types.GET_INVOICE_LIST_SUCCESS,
      payload: dummyData,
    });
  } else {
    dispatch({
      type: types.GET_INVOICE_LIST_FAILURE,
    });
  }
};

export const AddInvoice = (data, cb) => (dispatch) => {
  console.log(data);
  dispatch({
    type: types.ADD_INVOICE_REQUEST,
  });
  if (data) {
    // dispatch(getInvoiceList());
    cb && cb();
    dispatch({
      type: types.ADD_INVOICE_SUCCESS,
      payload: data,
    });
  } else {
    cb && cb();
    dispatch({
      type: types.ADD_INVOICE_FAILURE,
    });
  }
};

export const updateInvoice = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: types.UPDATE_INVOICE_REQUEST,
  });

  dispatch({
    type: types.UPDATE_INVOICE_SUCCESS,
    payload: data,
  });

  dispatch({
    type: types.UPDATE_INVOICE_FAILURE,
  });
};

export const deleteInvoice = (data) => (dispatch) => {
  console.log(data);
  dispatch({
    type: types.DELETE_INVOICE_REQUEST,
  });
  if (data) {
    dispatch({
      type: types.DELETE_INVOICE_SUCCESS,
      payload: data,
    });
  } else {
    dispatch({
      type: types.DELETE_INVOICE_FAILURE,
    });
  }
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

export const setItem = (data) => (dispatch) => {
  dispatch({
    type: types.SET_CURRENT_ITEM,
    payload: data,
  });
};
