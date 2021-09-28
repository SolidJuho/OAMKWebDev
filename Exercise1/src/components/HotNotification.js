import React from 'react';
import styles from './HotNotification.module.css';

export default function HotNotification(props) {
    return (
        <div className={(props.data.isad)?styles.containerad:styles.containerhot}>
            <span className={styles.headertext}>{props.data.topic}:</span> {props.data.body}
        </div>
    )
}
