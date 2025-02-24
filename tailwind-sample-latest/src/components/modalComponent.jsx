import React from 'react'

function ModalComponent({closeModal}) {
  return (
         <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl mb-4">Modal Title</h2>
            <p>Add New Package</p>

            {/* Close button */}
            <button 
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
  )
}

export default ModalComponent