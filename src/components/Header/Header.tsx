import styles from "./Header.module.scss";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { BsFileBinary } from "react-icons/bs";

export interface HeaderProps {
  readonly className?: string;
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${styles.headerContainer} ${className ?? ""}`}>
      <div className={styles.headerLogo}>
        <BsFileBinary className={styles.logo} />
        <h1 className={styles.appTitle}>Byte Snap</h1>
      </div>
      <nav className={styles.headerInfo}>
        <a
          className="bi bi-star fs-1"
          href="https://www.linkedin.com/in/gabriel-sordi-damo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLogoLinkedinSquare />
        </a>
      </nav>
    </header>
  );
};

export default Header;
