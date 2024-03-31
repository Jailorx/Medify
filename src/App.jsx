import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import SearchForm from "./components/SearchForm/SearchForm";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import Specialization from "./components/Specialization/Specialization";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <SearchForm />
      <SliderComponent />
      <Specialization />
    </div>
  );
}

export default App;
