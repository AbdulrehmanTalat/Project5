import React from 'react'
import style from '../CSS/Header.module.css';
import Button from  '@material-ui/core/Button';
export const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.banner_content}>
                <h1>
                    Your web presence just got so
                    much better
                </h1>
                <p>
                    Your company’s website isn’t just a digital business card or a few
                    brush strokes here and there. It’s an essential sales channel, and it
                    has rules. You need it to survive in the jungle of business.				
                </p>
                <div className={style.banner_button}>
                    <Button variant="contained" className={style.btn_primary}>
                        Work With US
                    </Button>&nbsp;&nbsp;
                    <Button variant="outlined" className={style.btn}>
                        View Our Projects
                    </Button>

                </div>

            </div>

        </div>
    )
}
export default Header;