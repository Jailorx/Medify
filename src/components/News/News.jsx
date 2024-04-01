import Card from "./Card/Card";
import styles from "./News.module.css";
import { useState, useEffect } from "react";

const News = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const newCards = [];
    for (let i = 0; i < 3; i++) {
      newCards.push(<Card key={i} />);
    }
    setCards(newCards);
  }, []);

  return (
    <div className={styles.newsContainer}>
      <p className={styles.news_category}>Blog & News</p>
      <p className={styles.news_heading}>Read Our Latest News</p>
      <div className={styles.news_cards}>{cards}</div>
    </div>
  );
};

export default News;
