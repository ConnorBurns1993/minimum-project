import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import DeleteArticleConfirmation from "./DeleteArticle";

function DeleteArticleModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteArticleConfirmation />
        </Modal>
      )}
    </>
  );
}

export default DeleteArticleModal;
