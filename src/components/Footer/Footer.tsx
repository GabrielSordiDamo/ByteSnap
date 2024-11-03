import styles from "./Footer.module.scss";
import { BsFileBinary } from "react-icons/bs";

export interface FooterProps {
  readonly className?: string;
}

const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${styles.footerContainer} ${className ?? ""}`}>
      <div className={styles.footerLogo}>
        <BsFileBinary className={styles.logo} />

        <span className={styles.appTitle}>Byte Snap</span>
      </div>
      <div className={styles.contactMe}>
        <a
          href="https://www.linkedin.com/in/gabriel-sordi-damo/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactLink}
        >
          <span>Contact Me </span>
          <span className="d-block d-sm-inline">@Gabriel Sordi Damo</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
