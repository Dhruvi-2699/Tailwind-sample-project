/* eslint-disable react/prop-types */

function ModalComponent({ title, component, closeModal }) {
  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-50">
      <div className="bg-white p-6 border-2 border-black shadow-lg md:min-w-[500px]">
        <div className="relative flex justify-center w-full">
          <h2 className="text-2xl mb-4 font-bold">{title}</h2>
          <span
            onClick={closeModal}
            className="absolute top-0 right-0 mt-0 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        {component}
      </div>
    </div>
  );
}

export default ModalComponent;
