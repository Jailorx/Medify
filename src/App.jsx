import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchForm from "./components/SearchForm/SearchForm";
import SliderComponent from "./components/SliderComponent/SliderComponent";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <SearchForm />
      <SliderComponent />
    </div>
  );
}

export default App;
