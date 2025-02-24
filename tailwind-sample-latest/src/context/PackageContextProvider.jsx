/* eslint-disable react/prop-types */
import { useState } from "react";
import PackageContext from "./PackageContext";

const PackageContextProvider =({children})=>{
    const [packageData,setPackageData] =useState(null)
    return(
        <PackageContext.Provider value={{packageData,setPackageData}}>
            {children}
        </PackageContext.Provider>
    )
}

export default PackageContextProvider