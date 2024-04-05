import styles from "./Card.module.css";

const Card = ({ height, width, bgcolor, icon, title }) => {
  return (
    <div
      className={styles.cardContainer}
      style={{ backgroundColor: bgcolor, height: height, width: width }}
    >
      <img src={icon} alt={`${icon}_icon`} />
      <p>{title}</p>
    </div>
  );
};

export default Card;
