import React, { useState, useContext } from "react";

const HospitalContext = React.createContext();

const HospitalContextProvider = ({ children }) => {
  const [hospitals, setHospitals] = useState([]);

  return (
    <HospitalContext.Provider value={{ hospitals, setHospitals }}>
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospitalContext = useContext(HospitalContext);
