import styles from "./HeroSection.module.css";
import heroImage from "../../assets/heroImage.png";

const HeroSection = () => {
  return (
    <div className={styles.heroSectionContainer}>
      <div className={styles.heroContent}>
        <p className={styles.heroContent_tag}>Skip the travel! Find Online</p>
        <p className={styles.heroContent_bold}>
          Medical <span>Centers</span>
        </p>
        <p className={styles.heroContent_message}>
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImage} alt="hero_Image_of_doctors" />
      </div>
    </div>
  );
};

export default HeroSection;
