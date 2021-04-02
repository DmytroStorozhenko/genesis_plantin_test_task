import React, {FC} from 'react';
import styles from "./article.module.scss"

export const Article: FC<ArticleType> = (props) => {
    let {type, image, heading, description} = props
    return (
        <div className={
            (type === 'new')? styles.new_article_container :
            (type === 'top')? styles.top_article_container :
            styles.basic_article_container
        }>
            <img src={image} alt="article_image"/>
            <div>
                <span>Feb 23 · 8 min read</span>
                <h3>{heading}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export type ArticleType = {
    type: 'new' | 'top' | 'basic'
    image: string
    heading: string
    description: string
}