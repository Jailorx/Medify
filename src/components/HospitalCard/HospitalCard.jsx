import React from "react";
import styles from "./HospitalCard.module.css";
import hospitalCardIcon from "../../assets/icon/hospital-card-icon.svg";
import likeIcon from "../../assets/icon/like-icon.svg";

const HospitalCard = ({ hospital, type }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card_icon}>
        <img src={hospitalCardIcon} alt="hospital_icon" />
      </div>
      <div className={styles.card_contents}>
        <p className={styles.card_contents_name}>{hospital["Hospital Name"]}</p>
        <p
          className={styles.card_contents_place}
        >{`${hospital["City"]},${hospital["State"]}`}</p>
        <p className={styles.card_contents_owner}>
          {hospital["Hospital Ownership"]}
        </p>
        <p className={styles.card_contents_price}>
          <span className={styles.price_free}>FREE</span>
          <span className={styles.price_original}>₹500</span>
          Consultation fee at clinic
        </p>
        <p className={styles.card_contents_rating}>
          <img src={likeIcon} alt="like_icon" />
          {hospital["Hospital overall rating"]}
        </p>
      </div>
      <div className={styles.card_appointment}>
        {type ? (
          <div className={styles.card_appointment_details}>
            <p className={styles.card_appointment_time}>10:30</p>
            <p className={styles.card_appointment_date}>20 April 2024</p>
          </div>
        ) : (
          <div className={styles.card_appointment_book}>
            <p>Available Today</p>
            <button className={styles.card_appointment_book_btn}>
              Book FREE Center Visit
            </button>
          </div>
        )}
        ;
      </div>
    </div>
  );
};

export default HospitalCard;
