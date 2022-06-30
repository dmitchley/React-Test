import React from "react";
import Modal from "react-modal";

function LoserModal({ setIsOpen, modalIsOpen }) {
  // modal stuff
  function PlayAgain() {
    window.location.reload(false);
    setIsOpen(false);
  }
  // modal
  return (
    <>
      {/* Modal for the Loser!*/}
      <Modal
        isOpen={modalIsOpen}
        className="modalStyles"
        contentLabel="Example Modal"
      >
        <div className="modal-inner">
          <h2>You Lost!</h2>
          <div id="confetti-wrapper"></div>

          <button onClick={PlayAgain}>Play Again</button>
        </div>
      </Modal>
      {/* Modal for the Loser!*/}
    </>
  );
}

export default LoserModal;
