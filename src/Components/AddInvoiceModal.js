import React from "react";
import { Modal } from "antd";

const AddInvoiceModal = (props) => {
  return (
    <>
      <Modal
        title="Add InVoice"
        footer={null}
        visible={props.addInvoiceModal}
        onCancel={() => props.handleAddInvoiceModal(false)}
      ></Modal>
    </>
  );
};

export default AddInvoiceModal;
