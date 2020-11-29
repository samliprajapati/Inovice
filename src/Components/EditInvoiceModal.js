import React from "react";
import { Modal } from "antd";
import EditForm from "./EditForm";

const EditInvoiceModal = (props) => {
  console.log(props.currentInvoice);
  return (
    <>
      <Modal
        title="Edit InVoice"
        footer={null}
        visible={props.editInvoiceModal}
        onCancel={() => props.handleEditInvoiceModal(false)}
      >
        <EditForm currentInvoice={props.currentInvoice} />
      </Modal>
    </>
  );
};

export default EditInvoiceModal;
