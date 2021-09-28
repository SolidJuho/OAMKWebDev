import React from 'react'
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerBackground}>
            <div className={styles.container}>
                <div className={styles.maincontainer}>
                    <div className={styles.brand}>HELSINGIN SANOMAT</div>
                    <div className={styles.textbutton}>Etusivu</div>
                    <div className={styles.textbutton}>Uutiset</div>
                    <div className={styles.textbutton}>Lehdet</div>
                    <div className={styles.textbutton}>Asiakaspalvelut</div>
                </div>
                <div className={styles.sidecontainer}>
                    <div className={styles.buttonbg}>
                        <div className={styles.button}>Tilaa</div>
                        </div>
                    <div className={styles.textbutton}>Kirjaudu</div>
                    <div className={styles.textbutton}>Valikko</div>

                </div>
            </div>
        </div>
    )
}
