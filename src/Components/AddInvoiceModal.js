import React from "react";
import { Modal } from "antd";
import AddForm from "./AddForm";

const AddInvoiceModal = (props) => {
  return (
    <>
      <Modal
        width={"40%"}
        title="Add InVoice"
        footer={null}
        visible={props.addInvoiceModal}
        onCancel={() => props.handleAddInvoiceModal(false)}
      >
        <AddForm />
      </Modal>
    </>
  );
};

export default AddInvoiceModal;
