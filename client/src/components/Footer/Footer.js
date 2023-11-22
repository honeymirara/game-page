import Icons from '../Icons/Icons'
import style from './style.module.scss'



export default function Footer() {
    return (
        <>
            <div className={style.container}>

                <nav>
                    <p>Terms & Conditions</p>
                    <p>Cookies</p>
                    <p>Contacts</p>
                    <p>Careers</p>
                    <p>Brand Guide</p>
                </nav>


                <div className={style.socialMedia}>
                    <p className={style.textMedia}>Our social media</p>
                    <div className={style.wrapperIcons}>

                        <Icons id='twitter' />
                        <Icons id='facebook' />
                        <Icons id='instagram' />
                        <Icons id='in' />
                        <Icons id='youtube' />
                        <Icons id='tiktok' />
                        <Icons id='tg' />
                        <Icons id='vk' />
                    </div>
                </div>
            </div>
        </>
    )
}
