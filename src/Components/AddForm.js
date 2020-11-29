import React from "react";
import { Input, Button, Form, message, Modal } from "antd";
import { Formik } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddInvoice } from "./HomeAction";

function AddForm(props) {
  return (
    <Formik
      initialValues={{
        companyDetails: "",
        customerDetails: "",
        invoiceNo: "",
        listItems: "",
        subTotal: "",
        total: "",
        tax: "",
        discount: "",

        id: Date.now(),
      }}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        props.AddInvoice(values);
        resetForm();
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
            Add
          </Button>
        </form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ home }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddInvoice }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
