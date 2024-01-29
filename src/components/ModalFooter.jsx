import React from "react";

const ModalFooter = ({ setShowModal }) => (
  <section className="flex justify-center p-6 rounded-b">
    <button
      className="text-orange-500 border-2 border-black rounded-md uppercase font-bold px-6 py-2 text-sm mr-1 mb-1"
      type="button"
      onClick={() => setShowModal(false)}
    >
      Submit
    </button>
  </section>
);

export default ModalFooter;
