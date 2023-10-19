import style from './style.module.scss'
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <>
            <div className={style.container}>
                <nav>
                    <p>About us</p>
                    <p>Brands</p>
                    <p>Commissions</p>
                    <p>News</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                </nav>
                <div>
                    <div className={style.planet}>
                    </div>
                    <div className={style.language}>en</div>
                </div>

                <div className={style.btnTag}>
                    <Button variant="outlined">Log in</Button>
                    <Button variant="contained">Sign up</Button>

                </div>

            </div>
        </>

    )
}
