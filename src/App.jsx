import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import PatientCaring from "./components/PatientCaring/PatientCaring";
import SearchForm from "./components/SearchForm/SearchForm";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import Specialization from "./components/Specialization/Specialization";
import News from "./components/News/News";

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <HeroSection />
      <SearchForm />
      <SliderComponent />
      <Specialization />
      <PatientCaring />
      <News />
    </div>
  );
}

export default App;
