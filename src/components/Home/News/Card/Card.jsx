import styles from "./Card.module.css";
import CardPic from "../../../../assets/images/demo-card.png";
import DoctorImg from "../../../../assets/images/doctor.jpg";

const Card = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card_image}>
        <img src={CardPic} alt="demo_card_image" />
      </div>
      <div className={styles.card_content}>
        <p className={styles.card_content_about}>Medical | March 31,2022</p>
        <p className={styles.card_content_about_content}>
          6 Tips To Protect Your Mental Health When You’re Sick
        </p>
        <p className={styles.card_content_doctor}>
          <img src={DoctorImg} alt="doctor_image" /> Rebecca Lee
        </p>
      </div>
    </div>
  );
};

export default Card;
