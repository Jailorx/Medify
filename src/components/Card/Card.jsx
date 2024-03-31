import styles from "./Card.module.css";

const Card = ({ bgcolor, icon, title }) => {
  return (
    <div className={styles.cardContainer} style={{ backgroundColor: bgcolor }}>
      <img src={icon} alt={`${icon}_icon`} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
