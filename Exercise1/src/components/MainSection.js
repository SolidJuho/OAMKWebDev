import React from 'react'
import styles from './MainSection.module.css';

export default function MainSection(props) {
    return (
        <div className={styles.main}>
            <h1>Koronavirus</h1>
            <img src={props.maintopics[0].image} alt="" className={styles.image}/>
            <p>{props.maintopics[0].body}</p>
        </div>
    )
}
