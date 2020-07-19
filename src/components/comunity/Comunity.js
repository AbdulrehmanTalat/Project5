import React from 'react'
import style from '../CSS/Community.module.css';
import img from '../../Images/community1.png';
import useWebAnimations from "@wellyshen/use-web-animations";
import {Container, Row} from 'react-bootstrap';
export const Comunity = () => {
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
         <div className={style.txt_div}>
                 <h1>
                 Community
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
             <div ref={animdiv}>
             <img src={img} className={style.img} alt=" "/>
             </div>
            
         </Row>
        </Container>
     </div>
    )
}
export default Comunity;
