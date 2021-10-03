import React from 'react'
import SideTopics from './SideTopics'
import styles from './SideSection.module.css'

export default function SideSection(props) {
    return (
        <div>
            <div className={styles.title}>
            Luetuimmat
            </div>
            <div>
            {
                props.mostread.map(element=><SideTopics data ={element}/>)
            }
            </div>
        </div>
    )
}
