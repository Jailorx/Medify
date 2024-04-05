import styles from "./Home.module.css";
import HeroSection from "./HeroSection/HeroSection";
import PatientCaring from "./PatientCaring/PatientCaring";
import SearchForm from "./SearchForm/SearchForm";
import SliderComponent from "./SliderComponent/SliderComponent";
import Specialization from "./Specialization/Specialization";
import News from "./News/News";
import Family from "./Family/Family";
import { HospitalContextProvider } from "../../contexts/HospitalContext";

function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <HospitalContextProvider>
        <SearchForm />
      </HospitalContextProvider>
      <SliderComponent />
      <Specialization />
      <PatientCaring />
      <News />
      <Family />
    </div>
  );
}

export default Home;
