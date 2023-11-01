import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import style from './style.module.scss';
import Lines from '../../components/Lines/Lines';

export default function HomePage() {
    return (<>

        <Header />

        <div className={style.wrapper}>
            <div className={style.info}>
                <h1>House of</h1>
                <h2>Gambling</h2>
                <p>Raise your ROI with direct advertiser</p>
                <div className={style.btn}>Become a Partner</div>
            </div>
            <div className={style.animation}>
                <Lines id='firstLine' />
                <Lines id='secondLine' />
                <Lines id='thirdLine' />
            </div>
            <div className={style.blog}>
                <h1>Blog</h1>
                <div className={style.scroll}>
                    <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                    <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                    <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                    <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                     <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                     <div className={style.textBlog}>
                        <p>Payment methods: Skrill, Neteller, webmoney, Bank transfer</p>
                        <p className={style.paragraph}>10.02.2023</p>
                    </div>
                   
                </div>
            </div>
        </div>


        <Footer />
    </>
    )
}
