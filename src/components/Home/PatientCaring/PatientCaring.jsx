import styles from "./PatientCaring.module.css";
import CaringImage from "../../../assets/images/patient-caring.png";
import tickIcon from "../../../assets/icon/tick-icon.svg";

const PatientCaring = () => {
  return (
    <div className={styles.caringContainer}>
      <div className={styles.pictures}>
        <img src={CaringImage} alt="hospital_staff_caring_for_patient" />
      </div>
      <div className={styles.content}>
        <p className={styles.content_tag}>
          HELPING PATIENTS FROM AROUND THE GLOBE!!
        </p>
        <p className={styles.content_tag_bold}>
          Patient <span>Caring</span>
        </p>
        <p className={styles.content_message}>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        <div className={styles.content_list}>
          <p>
            <img src={tickIcon} alt="tick_icon" />
            Stay Updated About Your Health
          </p>
          <p>
            <img src={tickIcon} alt="tick_icon" />
            Check Your Results Online
          </p>
          <p>
            <img src={tickIcon} alt="tick_icon" />
            Manage Your Appointments
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientCaring;
