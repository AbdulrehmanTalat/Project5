import React from 'react'
import style from '../CSS/Secure.module.css';
import img from '../../Images/article-image-5.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import {Container, Row} from 'react-bootstrap';
export const Secure = () => {
    const { ref: animdiv} = useWebAnimations({
        autoPlay: true,
        keyframes: [
            {
                transform: "translateY(0)"
            },
            {
                transform: "translateY(-15px)"
            },
        ],
        timing: {
            duration: 3000,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'ease-in-out',
        },
    });
    return (
        <div className={style.bg}> 
           <Container className={style.container}>
            <Row className={style.items}>
                <div ref={animdiv}>
                <img src={img} className={style.img} alt=" "/>
                </div>
                <div className={style.txt_div}>
                    <h1>
                    Maintain Security
                    </h1>
                    <p>
                 Together with the STYLE team and foundation, 
                 </p>
                 <p>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit
                 </p>
                 <p>
                 ed eget quam vitae orci elementum facilisis.
                 </p>
                </div>
            </Row>
           </Container>
        </div>
    )
}
export default Secure;
