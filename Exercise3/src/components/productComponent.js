import React from 'react';
import styles from './productComponent.module.css';
import Grid from '@mui/material/Grid';

export default function ProductComponent(props) {
    return (
        <Grid item className={styles.container}>            
            <img className={styles.image} src={props.data.imageUrl} alt=''></img>
            <div className={styles.title}>{props.data.title}</div>
            <div className={styles.manifacturer}>by {props.data.manifacturer}</div>
            <div><img className={styles.stars}  src={`ratings/${props.data.stars}.png`} alt=''></img><a className={styles.reviews}> {props.data.reviews}</a></div>
            <div>
            {
                props.data.price===0 ? null : "$"+props.data.price
            }
            <span className={styles.small}>
                {
                props.data.regularPrice===0 ? null : " $"
                }
                <a className={styles.linethrough}>
                {
                    props.data.regularPrice===0 ? null : props.data.regularPrice
                }
                </a></span>               
            </div>
            <div className={styles.ship}>{props.data.shipsToFinland ? "Ships to Finland" :null }</div>
            <div className={styles.stocklow}> {props.data.stock} </div>
            <div><span className={styles.certified}>{props.data.amazonCertified === "" ? null:"Amazon Certified:" }</span> {props.data.amazonCertified}</div>
        </Grid>
    )
}