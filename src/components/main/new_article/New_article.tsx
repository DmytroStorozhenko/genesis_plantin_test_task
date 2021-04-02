import React from 'react';
import styles from "./new_article.module.scss"
import badge from '../../../accets/img/new_badge.png'
import new_article_img from '../../../accets/img/new_article_image.png'

import {Article} from "../article/Article";

export const NewArticle = () => {
    return (
        <div className={styles.new_article_container}>
            <div className={styles.new_badge}>
                <img src={badge} alt="new_badge"/>
            </div>
            <Article
                type={'new'}
                heading={'Tips & Tricks For Cutting'}
                description={'Pruning, like any other skill, requires knowing what you are doing to achieve success.\n' +
                '             The old idea that anyone with a chain saw or a pruning saw can be a landscape pruner\n' +
                '             is far from the truth. More trees are killed or ruined each year from improper pruning\n' +
                '             than by pests. Remember that pruning is the removal or...'}
                image={new_article_img}
            />
        </div>
    )
}