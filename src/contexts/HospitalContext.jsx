import React, { createContext, useState, useContext, useEffect } from "react";

const HospitalContext = createContext();

export const HospitalContextProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);
  useEffect(() => {
    console.log("Hospitals updated:", hospitals);
    console.log(hospitals);
  }, [hospitals]);

  return (
    <HospitalContext.Provider value={{ hospitals, setHospitals }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitalContext = () => useContext(HospitalContext);
