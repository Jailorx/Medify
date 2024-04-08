import React from "react";
import styles from "./Hospital.module.css";

import SearchPanel from "./SearchPanel/SearchPanel";
import HospitalList from "../HospitalList/HospitalList";

const Hospital = () => {
  return (
    <div className={styles.container}>
      <SearchPanel />
      <HospitalList />
    </div>
  );
};

export default Hospital;
