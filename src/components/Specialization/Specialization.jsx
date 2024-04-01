import styles from "./Specialization.module.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import dentistryIcon from "../../assets/icon/dentistry-icon.svg";
import cardiologyIcon from "../../assets/icon/heart-icon.svg";
import mriIcon from "../../assets/icon/mri-icon.svg";
import bloodTestIcon from "../../assets/icon/bloodsample-icon.svg";
import piscologistIcon from "../../assets/icon/immune-icon.svg";
import xRayIcon from "../../assets/icon/xray-icon.svg";
import careIcon from "../../assets/icon/stethoscope-icon.svg";
import Button from "../Button/Button";

const Specialization = () => {
  const [cards, setCards] = useState([]);
  const [cardIcons, setCardIcons] = useState([
    dentistryIcon,
    careIcon,
    cardiologyIcon,
    mriIcon,
    bloodTestIcon,
    piscologistIcon,
    dentistryIcon,
    xRayIcon,
  ]);
  const [cardNames, setCardNames] = useState([
    "Dentistry",
    "Primary Care",
    "Cardiology",
    "MRI Resonance",
    "Blood Test",
    "Piscologist",
    "Laboratory",
    "X-Ray",
  ]);

  useEffect(() => {
    const generatedCards = [];
    for (let i = 0; i < cardNames.length; i++) {
      generatedCards.push(
        <Card
          key={i}
          height="180px"
          width="270px"
          bgcolor="rgba(255,255,255,1)"
          icon={cardIcons[i]}
          title={cardNames[i]}
        />
      );
    }

    setCards(generatedCards);
  }, []);
  return (
    <div className={styles.specializedContainer}>
      <div className={styles.title}>Find by Specialisation</div>
      <div className={styles.cardsContainer}>{cards}</div>
      <Button text="View All" />
    </div>
  );
};

export default Specialization;
