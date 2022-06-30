import React from "react";
import Modal from "react-modal";

function LoserModal({ WinnersetIsOpen, WinnermodalIsOpen }) {
  // modal stuff
  function PlayAgain() {
    window.location.reload(false);
    WinnermodalIsOpen(false);
  }
  // modal

  // [modalIsOpen, setIsOpen]
  return (
    <>
      {/* Modal for the Winner!*/}
      <Modal
        isOpen={WinnersetIsOpen}
        className="modalStylesWinner"
        contentLabel="Example Modal"
      >
        <div className="modal-inner">
          <h2>You Won!</h2>
          <div id="confetti-wrapper"></div>

          <button onClick={PlayAgain}>Play Again</button>
        </div>
      </Modal>
      {/* Modal for the Winner!*/}
    </>
  );
}

export default LoserModal;
