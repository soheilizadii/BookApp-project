import styles from './Layouts.module.css';
import { FaHeart } from "react-icons/fa";
const Layouts = ({children}) => {
    return ( 
        <>
          <header className={styles.header}>
            <h1>Book App </h1>
            <p>
                <a href='#'>SoheilReact.js</a> | React.js Full Course
            </p>
          </header>
          {children}
          <footer className={styles.footer}>
            <p>Developed by Soheil <span className={styles.loveIcon}><FaHeart/></span></p>
          </footer>
        </>
     );
}
 
export default Layouts;