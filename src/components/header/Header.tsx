import React from 'react';
import styles from "./header.module.scss"
import logo from '../../accets/img/logo.png'
import search from '../../accets/img/search_input.svg'
import user_icon from '../../accets/img/user_icon.png'
import sandwich_menu from '../../accets/img/menu_sandwich.png'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.main_navbar}>
                <div className={styles.first_block}>
                    <div className={styles.logo}>
                        <a href="#"><img src={logo} alt="logo"/></a>
                    </div>
                    <div className={styles.nav_links}>
                        <ul>
                            <li className={styles.nav_item}>Discover</li>
                            <li className={styles.nav_item}>My Plants</li>
                            <li className={styles.nav_item}>Diseases</li>
                            <li className={styles.nav_item}>Blog</li>
                            <li className={styles.nav_item}>FAQ</li>
                            <li className={styles.nav_item}>Contact Us</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <div className={styles.search}>
                        <button className={styles.btn} type="button">
                            <img src={search} alt="search"/>
                        </button>
                    </div>
                    <div className={styles.user_icon}>
                        <button className={styles.btn} type="button">
                            <img src={user_icon} alt="user_icon"/>
                        </button>
                    </div>
                    <div className={styles.sandwich_menu}>
                        <button className={styles.btn} type="button">
                            <img src={sandwich_menu} alt="sandwich-menu"/>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}