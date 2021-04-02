import React from 'react';
import styles from "./top_article.module.scss"
import {Article} from "../article/Article";
import article_img_1 from '../../../accets/img/top_article_image_1.svg'
import article_img_2 from '../../../accets/img/top_article_image_2.svg'

export const TopArticle = () => {
    return (
        <>
            <div className={styles.top}>
                <hr />
                <p>top of the day</p>
            </div>
            <div className={styles.top_articles_container}>
                <Article
                    type={'top'}
                    heading={'Professional Report'}
                    description={'Reporting a plant can seem like a difficult task because a lot of things can go ' +
                    'wrong – you can damage...'}
                    image={article_img_1}
                />
                <Article
                    type={'top'}
                    heading={'Professional Report'}
                    description={'Reporting a plant can seem like a difficult task because a lot of things can go ' +
                    'wrong – you can damage...'}
                    image={article_img_2}
                />
            </div>
        </>
    )
}