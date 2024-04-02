import styles from "./App.module.css";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import PatientCaring from "./components/PatientCaring/PatientCaring";
import SearchForm from "./components/SearchForm/SearchForm";
import SliderComponent from "./components/SliderComponent/SliderComponent";
import Specialization from "./components/Specialization/Specialization";
import News from "./components/News/News";
import Family from "./components/Family/Family";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

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
      <Family />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
