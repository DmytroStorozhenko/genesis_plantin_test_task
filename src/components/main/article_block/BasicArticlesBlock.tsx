import React, {FC} from 'react';
import styles from "./basic_articles_block.module.scss"
import {Article} from "../article/Article";
import basic_article_img_1 from '../../../accets/img/basic_article_image_1.svg'
import basic_article_img_2 from '../../../accets/img/basic_article_image_2.svg'
import basic_article_img_3 from '../../../accets/img/basic_article_image_3.svg'

export const BasicArticlesBlock: FC<BasicArticlesBlockType> = (props) => {
    return (
        <div className={styles.article_block_container}>
            {props.isInteresting &&
            <div className={styles.interesting}>
                <hr/>
                <p>interesting</p>
            </div>
            }
            <div className={styles.articles}>
                <Article
                    type={'basic'}
                    heading={'Professional Report'}
                    description={'Reporting a plant can seem like a difficult task because a lot of things can go ' +
                    'wrong – you can damage...'}
                    image={basic_article_img_1}
                />
                <Article
                    type={'basic'}
                    heading={'Professional Report'}
                    description={'Reporting a plant can seem like a difficult task because a lot of things can go ' +
                    'wrong – you can damage...'}
                    image={basic_article_img_2}
                />
                <Article
                    type={'basic'}
                    heading={'Professional Report'}
                    description={'Reporting a plant can seem like a difficult task because a lot of things can go ' +
                    'wrong – you can damage...'}
                    image={basic_article_img_3}
                />
            </div>
        </div>
    )
}

type BasicArticlesBlockType = {
    isInteresting?: boolean
}
