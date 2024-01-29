import React, { useState } from "react";
import Button from "./Button.jsx";
import ModalHeader from "./ModalHeader.jsx";
import ModalBody from "./ModalBody.jsx";
import ModalFooter from "./ModalFooter.jsx";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button setShowModal={setShowModal} />

      {showModal && (
        <section className="justify-center items-center fixed inset-0 px-2">
          <div className="opacity-25 fixed inset-0 bg-black"></div>
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="rounded-lg shadow-lg relative flex flex-col w-full bg-white">
              <ModalHeader setShowModal={setShowModal} />
              <ModalBody />
              <ModalFooter setShowModal={setShowModal} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
