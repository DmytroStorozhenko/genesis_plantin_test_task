import React from 'react';
import arrow from '../../accets/img/chevron_left.png'
import styles from './main.module.scss'
import {SearchBlock} from "./search_block/Search_block";
import {NewArticle} from "./new_article/New_article";
import {TopArticle} from "./top_article/Top_article";
import {BasicArticlesBlock} from "./article_block/BasicArticlesBlock";
import {Banner} from "./banner/Banner";

export const Main = () => {
    return (
        <div className={styles.main_block}>
            <nav className={styles.breadcrumbs}>
                <div className={styles.item}>
                    <img className={styles.arrow_left} src={arrow} alt="arrow-left"/>
                    <a href="#">Home</a>
                    <img className={styles.arrow_right} src={arrow} alt="arrow-right"/>
                </div>
                <div className={styles.item}>
                    <img className={styles.arrow_left} src={arrow} alt="arrow-left"/>
                    <a href="#">Blog</a>
                    <img className={styles.arrow_right} src={arrow} alt="arrow-right"/>
                </div>
            </nav>
            <SearchBlock/>
            <NewArticle/>
            <TopArticle/>
            <BasicArticlesBlock isInteresting={true}/>
            <BasicArticlesBlock/>
            <Banner/>
            <BasicArticlesBlock/>
            <BasicArticlesBlock/>
        </div>
    );
}
