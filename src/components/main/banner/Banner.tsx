import React from 'react';
import styles from './bunner.module.scss'
import logo from '../../../accets/img/logo.png'
import banner from '../../../accets/img/banner.png'

export const Banner = () => {
    return (
        <div className={styles.banner_container}>
            <div className={styles.banner_description}>
                <div className={styles.logo}>
                    <a href="#">
                        <img src={logo} alt="logo"/>
                    </a>
                </div>
                <h2>Get unlimited access to exclusive articles</h2>
                <p>Get rid of limits and read everything you wish</p>
                <button>Try for free</button>
            </div>
            <div className={styles.banner_img}>
                <img src={banner} alt='banner'/>
            </div>
        </div>
    )
}