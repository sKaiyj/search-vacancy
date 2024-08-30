import MainContent from "../widgets/MainContent";
import Navbar from "../widgets/Navbar";
import Sidebar from "../widgets/Sidebar";
import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={styles.content}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default App;
