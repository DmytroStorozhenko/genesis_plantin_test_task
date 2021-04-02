import React from 'react';
import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.links}>
                <a href="#">Terms of Service</a>
                <div className={styles.separator}></div>
                <a href="#">Privacy Policy</a>
                <div className={styles.separator}></div>
                <a href="#">Subscription Policy</a>
            </div>
            <div className={styles.copyright}>
                <p>©Copyright  © 2020 PlantIn. <br className={styles.br}/> All rights reserved</p>
            </div>
        </footer>
    )
}