/* eslint-disable react/prop-types */
import { useState } from "react";
import PackageContext from "./PackageContext";

const PackageContextProvider = ({ children }) => {
  const [packageData, setPackageData] = useState([]);
  const addPackageData = (values) => {
    setPackageData((packageData) => [...packageData, values]);
  };
  const updateLocationForm = (id, location) => {
    console.log("updateLocationForm-", id, location);

    setPackageData((prevPackageData) =>
      prevPackageData.map((packageItem) =>
        packageItem.uniqueId == id
          ? { ...packageItem, currentLocation: location }
          : packageItem
      )
    );
  };
  const updateStatusForm = (id, status, location) => {
    console.log("updateStatusForm-", id, status, location);

    setPackageData((prevPackageData) =>
      prevPackageData.map((packageItem) =>
        packageItem.uniqueId == id
          ? { ...packageItem, status: status, currentLocation: location }
          : packageItem
      )
    );
  };

  return (
    <PackageContext.Provider
      value={{
        packageData,
        addPackageData,
        updateLocationForm,
        updateStatusForm,
      }}
    >
      {children}
    </PackageContext.Provider>
  );
};

export default PackageContextProvider;
