import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.scss'

export default function HomePage() {
    return (<>
        <Header />
        <div className={style.wrapper}>
            <div>
                <h1>House of</h1>
                <h2>Gambling</h2>
                <p>Raise your ROI with direct advertiser</p>
                <div className={style.btn}>Become a Partner</div>
            </div>
        </div>
        <Footer />
        <div></div>
    </>
    )
}
