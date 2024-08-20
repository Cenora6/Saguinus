import { NavLink } from "@/components/nav-link/nav-link";
import styles from "./main-header.module.css";
import Link from "next/link";

export const MainHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul className={styles.links}>
          <li>
            <NavLink url="/news" text="News" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
