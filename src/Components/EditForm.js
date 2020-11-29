import React from "react";
import { Button } from "antd";
import { Formik, Form, Field } from "formik";
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
        invoiceNo: props.currentInvoice.invoiceNumber,
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
            Update
          </Button>
        </Form>
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
