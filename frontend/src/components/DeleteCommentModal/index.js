import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteCommentConfirmation from "./DeleteArticle";

function DeleteCommentModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteCommentConfirmation />
        </Modal>
      )}
    </>
  );
}

export default DeleteCommentModal;
