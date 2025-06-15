import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './Layout.module.css'

export default function Layout({ children }) {
    return (
        <div className={styles.layout_container}>
            <header className={styles.header_container}>
                <Header />
            </header>
            <main className={styles.main_container}>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
