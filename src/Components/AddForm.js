import React from "react";
import { Button } from "antd";
import { Formik, Form, Field } from "formik";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddInvoice } from "./HomeAction";

function AddForm(props) {
  function handleCallBack(resetForm) {
    console.log("........................");
    resetForm();
  }
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
        props.AddInvoice(values, () => handleCallBack(resetForm));
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
        <Form>
          <p>Company Details</p>
          <Field
            style={{ width: "100%" }}
            type="companyDetails"
            name="companyDetails"
          />
          <p>Customer Details</p>
          <Field
            style={{ width: "100%" }}
            type="customerDetails"
            name="customerDetails"
          />

          <p>Invoice Number</p>
          <Field style={{ width: "100%" }} type="invoiceNo" name="invoiceNo" />
          <p>List Items</p>
          <Field style={{ width: "100%" }} type="listItems" name="listItems" />

          <p>Sub Total</p>
          <Field style={{ width: "100%" }} type="subTotal" name="subTotal" />
          <p>Total</p>
          <Field style={{ width: "100%" }} type="total" name="total" />
          <p>Tax</p>
          <Field style={{ width: "100%" }} type="tax" name="tax" />
          <p>Discount</p>
          <Field style={{ width: "100%" }} type="discount" name="discount" />
          <p></p>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form>
      )}
    </Formik>
  );
}

const mapStateToProps = ({ home }) => ({});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ AddInvoice }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
