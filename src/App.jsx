import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
    </div>
  );
}

export default App;
