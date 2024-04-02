import styles from "./Footer.module.css";
import MobileSection from "../../assets/images/mobile-section-footer.png";
import Logo from "../Header/Navbar/Logo/Logo";
import facebookIcon from "../../assets/icon/facebook-icon.svg";
import twitterIcon from "../../assets/icon/twitter-icon.svg";
import youtubeIcon from "../../assets/icon/youtube-icon.svg";
import pinterestIcon from "../../assets/icon/pinterest-icon.svg";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <img src={MobileSection} alt="temp_mobile_section" />
      <div className={styles.footerWrapper}>
        <div className={styles.footer}>
          <div className={styles.footer_company}>
            <Logo />
            <div className={styles.footer_company_social_media}>
              <a href="#" target="_blank">
                <img src={facebookIcon} alt="facebook_icon" />
              </a>
              <a href="#" target="_blank">
                <img src={twitterIcon} alt="twitter_icon" />
              </a>
              <a href="#" target="_blank">
                <img src={youtubeIcon} alt="youtube_icon" />
              </a>
              <a href="#" target="_blank">
                <img src={pinterestIcon} alt="pinterest_icon" />
              </a>
            </div>
          </div>
          <div className={styles.footer_navigation}>
            <div className={styles.footer_navigation_navigationList}>
              <p>
                <span>&gt;</span>
                About Us
              </p>
              <p>
                <span>&gt;</span>
                Our Pricing
              </p>
              <p>
                <span>&gt;</span>
                Our Gallery
              </p>
              <p>
                <span>&gt;</span>
                Appointment
              </p>
              <p>
                <span>&gt;</span>
                Privacy Policy
              </p>
            </div>
            <div className={styles.footer_navigation_navigationList}>
              <p>
                <span>&gt;</span>Orthology
              </p>
              <p>
                <span>&gt;</span>Neurology
              </p>
              <p>
                <span>&gt;</span>Dental Care
              </p>
              <p>
                <span>&gt;</span>Opthamology
              </p>
              <p>
                <span>&gt;</span>Cardiology
              </p>
            </div>
            <div className={styles.footer_navigation_navigationList}>
              <p>
                <span>&gt;</span>
                About Us
              </p>
              <p>
                <span>&gt;</span>
                Our Pricing
              </p>
              <p>
                <span>&gt;</span>
                Our Gallery
              </p>
              <p>
                <span>&gt;</span>
                Appointment
              </p>
              <p>
                <span>&gt;</span>
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footer_copywrite}>
          Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
