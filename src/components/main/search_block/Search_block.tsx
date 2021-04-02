import React from 'react';
import styles from "./search_block.module.scss"
import girl from '../../../accets/img/girl.svg'

export const SearchBlock = () => {
    return (
        <div className={styles.search_block_container}>
            <div className={styles.search}>
                <div className={styles.heading}>
                    <h2>Stay always tuned with planting trends</h2>
                </div>
                <p><span>Tips & Tricks</span> selected specially for <span>you!</span></p>
                    <form action="" role="form" className={styles.form_group}>
                        <label htmlFor={styles.search_field}/>
                        <input
                            id={styles.search_field}
                            type="text"
                            placeholder="Search"/>
                    </form>
            </div>
            <div className={styles.girl_img}>
                <img src={girl} alt="girl_img"/>
            </div>
        </div>
    )
}