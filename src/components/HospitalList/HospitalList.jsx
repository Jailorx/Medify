import React from "react";
import styles from "./HospitalList.module.css";
import HospitalCard from "../HospitalCard/HospitalCard";
import { useHospitalContext } from "../../contexts/HospitalContext";
import oralDay from "../../assets/images/oral-day-banner.png";

const HospitalList = () => {
  const { hospitals } = useHospitalContext();
  return (
    <div className={styles.cardWrapper}>
      {hospitals.length > 0 && (
        <div className={styles.cardListContainer}>
          {hospitals.map((hospital) => (
            <HospitalCard hospital={hospital} />
          ))}
        </div>
      )}
      <div className={styles.oral_banner}>
        <img src={oralDay} alt="oral_health_day_banner" />
      </div>
    </div>
  );
};

export default HospitalList;
