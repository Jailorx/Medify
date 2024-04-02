import styles from "./FAQ.module.css";
import FAQImage from "../../assets/images/faq-image.png";

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <p className={styles.faq_category}>Get Your Answer</p>
      <p className={styles.faq_heading}>Frequently Asked Questions</p>
      <div className={styles.faqImage}>
        <img src={FAQImage} alt="picture_for_FAQ_section" />
      </div>
      <div className={styles.faq_accordion}></div>
    </div>
  );
};

export default FAQ;
