import React from "react";

const Button = ({ setShowModal }) => (
  <div className="h-screen flex justify-center items-center">
    <button
      className="bg-orange-400 px-3 rounded-md py-2 font-bold"
      onClick={() => setShowModal(true)}
    >
      Open Modal
    </button>
  </div>
);

export default Button;
