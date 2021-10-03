import React from 'react'
import styles from './SideTopics.module.css'

export default function SideTopics(props) {
    return (
        <div>
            <span className={styles.number}>{props.data.index}</span>
            <span className={styles.topic}>{props.data.type} | </span> {props.data.body}
            
        </div>
    )
}