import React from 'react'
import style from '../CSS/Build.module.css';
import img from '../../Images/what-can-you-build.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import {Container, Row} from 'react-bootstrap';
export const Build = () => {
    const { ref: animdiv} = useWebAnimations({
        autoPlay: true,
        keyframes: [
            {
                transform: "translateY(0px)"
            },
            {
                transform: "translateY(-15px)"
            },
        ],
        timing: {
            duration: 1000,
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
                 What we Build
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
export default Build;
