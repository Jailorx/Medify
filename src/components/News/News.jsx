import Card from "./Card/Card";
import styles from "./News.module.css";

const News = () => {
  return (
    <div className={styles.newContainer}>
      <p className={styles.category}>Blog & News</p>
      <p className={styles.heading}>Read Our Latest News</p>
      <Card />
    </div>
  );
};

export default News;
