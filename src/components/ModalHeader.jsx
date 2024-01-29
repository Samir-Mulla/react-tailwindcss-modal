import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const ModalHeader = ({ setShowModal }) => (
  <div className="flex justify-between items-center border-b p-3">
    <h3 className="text-2xl font-semibold">Modal Title</h3>
    <button
      className="border-0 text-gray-400 text-3xl"
      onClick={() => setShowModal(false)}
    >
      <AiOutlineClose />
    </button>
  </div>
);
export default ModalHeader;
