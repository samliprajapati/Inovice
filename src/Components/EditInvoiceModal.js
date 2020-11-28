import React from "react";
import { Modal } from "antd";

const EditInvoiceModal = (props) => {
  return (
    <>
      <Modal
        title="Edit InVoice"
        footer={null}
        visible={props.editInvoiceModal}
        onCancel={() => props.handleEditInvoiceModal(false)}
      ></Modal>
    </>
  );
};

export default EditInvoiceModal;
