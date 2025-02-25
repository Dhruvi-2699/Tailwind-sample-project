/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import PackageCard from "../components/page-component/PackageCard";
import PackageContext from "../context/PackageContext";
import ButtonComponent from "../components/common-components/ButtonComponent";
import ModalComponent from "../components/common-components/modalComponent";
import AddPackageForm from "../components/page-component/AddPackageForm";

export const PackageManager = () => {
  const { packageData } = useContext(PackageContext);
  const [openModal, setOpenModal] = useState();
  const closeModal = () => {
    setOpenModal(false);
  };
  console.log("check packageData-", packageData);

  return (
    <div>
      <div className="flex items-start justify-between mb-10">
        <h1 className="text-xl flex-1 text-left">Package List</h1>
        <ButtonComponent
          onClick={() => setOpenModal(true)}
          btnName={"Add New Package"}
        />
      </div>
      {packageData?.length > 0 &&
        packageData.map((packageItem) => (
          <PackageCard packageItem={packageItem} />
        ))}
      {openModal && (
        <ModalComponent
          title={"Add New Package"}
          component={<AddPackageForm closeModal={closeModal} />}
          closeModal={() => closeModal()}
        />
      )}
    </div>
  );
};
