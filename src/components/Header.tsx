import rocketLogo from '../assets/rocket.svg'
import styles from './Header.module.css'

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src={rocketLogo} alt="Rocket image"/>
                <div className={styles.logoText}>
                    <h3>
                        <span className={styles.to}>to</span>
                        <span className={styles.do}>do</span>
                    </h3>
                </div>
            </div>
        </header>
    )
}