import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getInvoiceList,
  handleAddInvoiceModal,
  handleEditInvoiceModal,
} from "./HomeAction";
import AddInvoiceModal from "./AddInvoiceModal";

const columns = [
  {
    title: "Company Details",
    dataIndex: "companyDetails",
  },
  {
    title: "Customer Details",
    dataIndex: "customerDetails",
  },
  {
    title: "Invoice Number",
    dataIndex: "invoiceNumber",
  },
  {
    title: "List Items",
    dataIndex: "listItems",
  },
  {
    title: "Sub Total",
    dataIndex: "subTotal",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
  {
    title: "Task",
    dataIndex: "task",
  },
  {
    title: "Discount",
    dataIndex: "discount",
  },
  {
    title: "",

    render: (name, item, i) => {
      return (
        <>
          <div
            onClick={() => {
              // props.setItem(item);
              // props.handleEditInvoiceModal(true);
            }}
          >
            edit
          </div>
          {/* <Icon
            type="edit"
            onClick={() => {
              // props.setItem(item);
              // props.handleLinkUpdatePartnerModal(true);
            }}
            style={{ cursor: "pointer" }}
          ></Icon> */}
        </>
      );
    },
  },
];

function Home(props) {
  useEffect(() => {
    props.getInvoiceList();
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          padding: 10,

          backgroundColor: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",

            width: "50%",
            color: "white",
          }}
        ></div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",

            width: "50%",
            color: "white",
          }}
        >
          <Button
            type="primary"
            onClick={() => props.handleAddInvoiceModal(true)}
          >
            Add Invoice
          </Button>
        </div>
      </div>
      <Table columns={columns} dataSource={props.invoiceList}></Table>
      <AddInvoiceModal
        addInvoiceModal={props.addInvoiceModal}
        handleAddInvoiceModal={props.handleAddInvoiceModal}
      />
      <editInvoiceModal
        handleEditInvoiceModal={props.handleEditInvoiceModal}
        editInvoiceModal={props.editInvoiceModal}
      />
    </div>
  );
}

const mapStateToProps = ({ home }) => ({
  invoiceList: home.invoiceList,
  addInvoiceModal: home.addInvoiceModal,
  editInvoiceModal: home.editInvoiceModal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { getInvoiceList, handleAddInvoiceModal, handleEditInvoiceModal },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
