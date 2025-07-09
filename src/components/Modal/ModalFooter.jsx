import React from "react";
import ButtonLoader from "@Components/Buttons/ButtonLoader";

const ModalFooter = ({ onClose, onSubmit, loading }) => {
  return (
    <div className="w-[90%] mx-auto flex justify-center items-center gap-5 mt-10">
      {loading ? (
        <ButtonLoader />
      ) : (
        <>
          <button
            onClick={onClose}
            className="flex-grow px-14 text-primary poppin-500 text-lg py-2 rounded-md bg-white border border-primary hover:text-white hover:bg-primary transition-all ease-out duration-500"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="flex-grow px-14 text-white poppin-500 text-lg py-2 rounded-md bg-primary border border-primary hover:text-primary hover:bg-white transition-all ease-out duration-500"
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default ModalFooter;
