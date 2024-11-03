import styles from "@/App.module.scss";
import Header from "@/components/Header/Header.tsx";
import Footer from "@/components/Footer/Footer.tsx";
import HomePage from "@/pages/HomePage/HomePage.tsx";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <div className={styles.body}>
        <HomePage></HomePage>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
