/* eslint-disable react/prop-types */
import { useState } from "react";
import ButtonComponent from "../common-components/ButtonComponent";
import ModalComponent from "../common-components/modalComponent";
import UpdateLocationForm from "./UpdateLocationForm";
import UpdateStatusForm from "./UpdateStatusForm";

function PackageCard({ packageItem }) {
  const {
    uniqueId,
    senderName,
    receiverName,
    sourceLocation,
    destinationLocation,
    currentLocation,
    status,
  } = packageItem;
  const [openLocationModal, setOpenLocationModal] = useState();
  const [openStatusModal, setOpenStatusModal] = useState();
  const closeModal = () => {
    setOpenLocationModal(false);
    setOpenStatusModal(false);
  };
  return (
    <>
      <div className="flex justify-between w-full my-2">
        <div className="flex-1 text-left">
          <div>
            <strong>No:#{uniqueId}</strong>
          </div>
          <div>
            From: {senderName}({sourceLocation})
          </div>
          <div>
            To: {receiverName}({destinationLocation})
          </div>
          <button
            disabled={status === "disabled"}
            style={{
              margin: "5px 0px",
              backgroundColor:
                status === "Shipped"
                  ? "yellow"
                  : status === "In-Transmit"
                  ? "lightblue"
                  : "lightgreen",
              borderColor:
                status === "Shipped"
                  ? "yellow"
                  : status === "In-Transmit"
                  ? "lightblue"
                  : "lightgreen",
              borderRadius: 20,
              fontSize: "12px",
              fontWeight: 600,
            }}
            // className={`rounded-[20px] p-4 ${
            //   status === "Shipped"
            //     ? "bg-yellow-500"
            //     : status === "In-Transmit"
            //     ? "bg-blue-500"
            //     : status === "Deliverd"
            //     ? "bg-green-500"
            //     : "bg-red-500"
            // }`}
          >
            {status}
          </button>
        </div>
        <div className="flex-grow text-right mr-5 mt-3">
          <div>
            <strong>Current Location :</strong> {currentLocation}
          </div>
        </div>
        <div className="flex flex-col items-start space-y-2">
          <ButtonComponent
            onClick={() => setOpenStatusModal(true)}
            btnName={"Update Status"}
            isDisabled={status == "Deliverd"}
          />
          <ButtonComponent
            onClick={() => setOpenLocationModal(true)}
            btnName={"Update Location"}
            isDisabled={status == "Deliverd"}
          />
        </div>
        {openStatusModal && (
          <ModalComponent
            title={"Update Status"}
            component={
              <UpdateStatusForm
                uniqueId={uniqueId}
                packageLocation={currentLocation}
                packageStatus={status}
                closeModal={closeModal}
              />
            }
            closeModal={() => closeModal()}
          />
        )}
        {openLocationModal && (
          <ModalComponent
            title={"Update Location"}
            component={
              <UpdateLocationForm
                uniqueId={uniqueId}
                packageLocation={currentLocation}
                closeModal={closeModal}
              />
            }
            closeModal={() => closeModal()}
          />
        )}
      </div>
      <hr className="w-full" />
    </>
  );
}

export default PackageCard;
