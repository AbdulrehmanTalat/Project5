import React from 'react'
import {  Card } from 'react-bootstrap';
import style from '../CSS/Footer.module.css';
export const Footer = () => {
    return (
        <div>
             <Card className={style.bg}>
                <Card.Footer className={style.txt_clr}>Created by Abdulrehman</Card.Footer>
            </Card>
        </div>
    )
}
export default Footer;