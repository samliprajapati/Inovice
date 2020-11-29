import React from "react";
import { Input, Button, Form, message, Modal } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateInvoice } from "./HomeAction";

function EditForm(props) {
  console.log(props.currentInvoice);
  return (
    <Formik
      enableReinitialize
      initialValues={{
        companyDetails: props.currentInvoice.companyDetails || "hello",
        customerDetails: props.currentInvoice.customerDetails,
        invoiceNo: props.currentInvoice.invoiceNo,
        listItems: props.currentInvoice.listItems,
        subTotal: props.currentInvoice.subTotal,
        total: props.currentInvoice.total,
        tax: props.currentInvoice.tax,
        discount: props.currentInvoice.discount,

        id: props.currentInvoice.id,
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        props.updateInvoice(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <p>Company Details</p>
          <Form.Item
            name="companyDetails"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.companyDetails}
          >
            <Input />
          </Form.Item>
          <p>Customer Details</p>
          <Form.Item
            name="customerDetails"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.customerDetails}
          >
            <Input />
          </Form.Item>
          <p>Invoice Number</p>
          <Form.Item
            name="invoiceNo"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.invoiceNo}
          >
            <Input />
          </Form.Item>

          <p>List Items</p>
          <Form.Item
            name="listItems"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.listItems}
          >
            <Input />
          </Form.Item>

          <p>Sub Total</p>
          <Form.Item
            name="subTotal"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subTotal}
          >
            <Input />
          </Form.Item>

          <p>Total</p>
          <Form.Item
            name="total"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.total}
          >
            <Input />
          </Form.Item>

          <p>Tax</p>
          <Form.Item
            name="tax"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.tax}
          >
            <Input />
          </Form.Item>
          <p>Discount</p>
          <Form.Item
            name="discount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.discount}
          >
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ home }) => ({
  currentInvoice: home.currentInvoice,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ updateInvoice }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
