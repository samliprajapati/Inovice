import React, { useEffect } from "react";
import { Button, Table } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getInvoiceList,
  handleAddInvoiceModal,
  handleEditInvoiceModal,
  setItem,
  deleteInvoice,
} from "./HomeAction";
import AddInvoiceModal from "./AddInvoiceModal";
import EditInvoiceModal from "./EditInvoiceModal";
import jsPDF from "jspdf";
import "jspdf-autotable";
import moment from "moment";

function Home(props) {
  useEffect(() => {
    props.getInvoiceList();
    // eslint-disable-next-line
  }, []);
  async function handleDownloadPdf() {
    const pdfInvoice =
      props.invoiceList.length &&
      props.invoiceList.map((invoice) => ({
        CompanyDetails: `${invoice.companyDetails || ""}`,
        CustomerDetails: `${invoice.customerDetails || ""}`,
        InoviceNumber: `${invoice.invoiceNumber || ""}`,
        ListItem: `${invoice.listItems || ""}`,
        SubTotal: `${invoice.subTotal || ""}`,
        Total: `${invoice.Total || ""}`,
        Tax: `${invoice.tax || ""}`,
        Discount: `${invoice.discount || ""}`,
      }));
    let result = pdfInvoice.length && pdfInvoice.map(Object.values);
    var doc = new jsPDF();
    doc.autoTable({ html: "#my-table", margin: { top: 30 } });

    //   var header = createHeaders(["coin", "game_group", "game_name", "game_version", "machine", "vlt"])
    var totalPagesExp = "{total_pages_count_string}";

    doc.autoTable({
      head: [
        [
          "Company",
          "Customer",
          "InvoiceNo.",
          "ListItem",
          "SubTotal",
          "Total",
          "Tax",
          "Discount",
        ],
      ],
      body: result,

      tableWidth: "100%",

      headStyles: {
        cellPadding: 3,
        fontSize: 12,
        cellWidth: "wrap",
        minCellWidth: "5",
      },
      columnStyles: {
        0: { minCellWidth: "30", fontSize: 10 },
        1: { minCellWidth: "30", fontSize: 10 },
        2: { fontSize: 10 },
        3: { fontSize: 10 },
        4: { fontSize: 10 },
        5: { fontSize: 10 },
        6: { fontSize: 10 },
        7: { fontSize: 10 },
      },
      theme: "grid",

      didDrawPage: function (data) {
        //

        doc.text(`Invoice Summary `, data.settings.margin.left + 70, 20);
        var before = `Published on ${moment().format("Do MMM YYYY")}`;
        doc.text(before, 75, 30);

        // Footer
        var str = "Page " + doc.internal.getNumberOfPages();
        // Total page number plugin only available in jspdf v1.0+
        if (typeof doc.putTotalPages === "function") {
          str = str + " of " + totalPagesExp;
        }
        doc.setFontSize(10);

        // jsPDF 1.4+ uses getWidth, <1.4 uses .width
        var pageSize = doc.internal.pageSize;
        var pageHeight = pageSize.height
          ? pageSize.height
          : pageSize.getHeight();
        doc.text(str, data.settings.margin.left, pageHeight - 10);
      },
      margin: { top: 35 },
    });
    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }
    doc.save(`Invoice ${moment().format("L")}`);
  }

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
      title: "Tax",
      dataIndex: "tax",
    },
    {
      title: "Discount",
      dataIndex: "discount",
    },
    // {
    //   title: "",

    //   render: (name, item, i) => {
    //     console.log(props);
    //     return (
    //       <>
    //         <div
    //           style={{ cursor: "pointer" }}
    //           onClick={() => {
    //             props.setItem(item);
    //             props.handleEditInvoiceModal(true);
    //           }}
    //         >
    //           edit
    //         </div>
    //       </>
    //     );
    //   },
    // },
    {
      title: "",

      render: (name, item, i) => {
        console.log(props);
        return (
          <>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.deleteInvoice(item);
              }}
            >
              Delete
            </div>
          </>
        );
      },
    },
  ];
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
      <div style={{ width: "100%" }}>
        <Table
          columns={columns}
          dataSource={props.invoiceList}
          scroll={{ y: 400 }}
          pagination={{
            defaultPageSize: 15,
            showSizeChanger: true,
            pageSizeOptions: ["15", "25", "40", "50"],
          }}
        ></Table>
      </div>
      <Button
        type="primary"
        onClick={handleDownloadPdf}
        style={{
          color: "white",
          border: "2px solid red",
          fontSize: "18px",
          backgroundColor: "red",
        }}
      >
        Generate Pdf
      </Button>
      <AddInvoiceModal
        addInvoiceModal={props.addInvoiceModal}
        handleAddInvoiceModal={props.handleAddInvoiceModal}
      />
      <EditInvoiceModal
        handleEditInvoiceModal={props.handleEditInvoiceModal}
        editInvoiceModal={props.editInvoiceModal}
        currentInvoice={props.currentInvoice}
      />
    </div>
  );
}

const mapStateToProps = ({ home }) => ({
  invoiceList: home.invoiceList,
  addInvoiceModal: home.addInvoiceModal,
  editInvoiceModal: home.editInvoiceModal,
  currentInvoice: home.currentInvoice,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getInvoiceList,
      handleAddInvoiceModal,
      handleEditInvoiceModal,
      setItem,
      deleteInvoice,
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
