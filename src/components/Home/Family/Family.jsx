import styles from "./Family.module.css";
import FamilyResults from "../../../assets/images/family.png";

const Family = () => {
  return (
    <div className={styles.familyContainer}>
      <div className={styles.family_content}>
        <p className={styles.family_content_tag}>
          CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.
        </p>
        <p className={styles.family_content_tag_bold}>Our Families</p>
        <p className={styles.family_content_message}>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </div>
      <div className={styles.family_content_achievements}>
        <img src={FamilyResults} alt="image_showing_past_achievements" />
      </div>
    </div>
  );
};

export default Family;
