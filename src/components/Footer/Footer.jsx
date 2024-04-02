import styles from "./Footer.module.css";
import googlePlay from "../../assets/images/google-play.png";
import appleStore from "../../assets/images/apple-store.png";

import Logo from "../Header/Navbar/Logo/Logo";
import facebookIcon from "../../assets/icon/facebook-icon.svg";
import twitterIcon from "../../assets/icon/twitter-icon.svg";
import youtubeIcon from "../../assets/icon/youtube-icon.svg";
import pinterestIcon from "../../assets/icon/pinterest-icon.svg";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer_app_download}>
        <div className={styles.footer_app_download_content}>
          <p className={styles.content_tag}>
            Download the <span>Medify</span> App
          </p>
          <p className={styles.content_message}>
            Get the link to download the app
          </p>
          <div className={styles.content_input}>
            <div className={styles.content_input_number}>
              <div className={styles.content_input_code}>+91</div>
              <input
                type="text"
                placeholder="Enter your phone number"
                maxLength="10"
              />
            </div>
            <Button text="Send SMS" />
          </div>
          <div className={styles.content_app_store}>
            <img src={googlePlay} alt="google_play_store_image" />
            <img src={appleStore} alt="apple_app_store_image" />
          </div>
        </div>
      </div>

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
