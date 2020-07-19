import React from 'react'
import style from '../CSS/Header.module.css';
import {Carousel, Button} from 'react-bootstrap';
export const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img src="https://rapidcompute.com/wp-content/uploads/2019/04/cloud-service-slider.jpg" alt=" "/> 
                    <Carousel.Caption>
                        <h1 className={style.txt_color}>
                            Defining
                        </h1>
                        <h1 className={style.txt_color}>
                            Mission Critical
                        </h1>
                        <Button className={style.btn_style}>
                            Find More
                        </Button>{" "}
                        <Button className={style.btn_style}>
                            Sign In
                        </Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://rapidcompute.com/wp-content/uploads/2019/04/slider-1.jpg" alt=" "/>
                    <Carousel.Caption>
                        <h1 className={style.txt_color}>
                            Secure Cloud
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="https://rapidcompute.com/wp-content/uploads/2019/04/slider-2.jpg" alt=" "/>
                    <Carousel.Caption>
                        <h1 className={style.txt_color}>
                            The New
                        </h1>
                        <h1 className={style.txt_color}>
                            Frontier of Security
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
        
        )
}
export default Header;