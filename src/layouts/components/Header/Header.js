import { Link } from 'react-router-dom';
import styles from './header.css';


function Header() {
    return (
        <header className={styles.wrapper}>
            <div className="inner">
                <Link to='/' className="logo-link">
                    <h3>Home</h3>
                </Link>

                <div className="actions">
                    <Link to='/login' className="logo-link">
                        <h3>Login</h3>
                    </Link>
                </div>
            </div>
        </header>
    );

}

export default Header;
