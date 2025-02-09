import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      {/* Modal content */}
      <div className="bg-white px-6 py-3 rounded-lg h-fit max:h-4/5 w-4/5 flex flex-col overflow-hidden">
        <div className="gap-2 flex justify-end items-center pb-2">
          <button
            className="rounded-full bg-gray-500 hover:bg-gray-700 transition-all duration-300 py-2 px-4 text-white"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
        <div className="grow rounded-lg max-h-[90%]">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.any,
  onClose: PropTypes.func,
};

export default Modal;
