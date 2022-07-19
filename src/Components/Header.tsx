import { RocketLaunch } from 'phosphor-react';
import styles from './Header.module.css';


export function Header(){
    return(
        <header className={styles.header}>
            <div>
                <RocketLaunch size={45} color="#4EA8DE"/>
            </div>
            <div>
                <strong className={styles.logoTo}>to</strong>
                <strong className={styles.logoDo}>do</strong>
            </div>
        </header>
    );
}