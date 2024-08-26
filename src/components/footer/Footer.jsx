import vk from '../../img/icons/vk.svg'
import telegram from '../../img/icons/telegram.svg'
import gitHub from '../../img/icons/gitHub.svg'

import './footer.css'


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://vk.com/avaz_ohunov" target='_blank'>
                                <img src={ vk } alt="VK" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://t.me/avaz_ohunov" target='_blank'>
                                <img src={ telegram } alt="Telegram" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/avaz-ohunov" target='_blank'>
                                <img src={ gitHub } alt="GitHub" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>
                            © { new Date().getFullYear() } &nbsp;
                            <a href="https://avaz-ohunov.github.io/my-site/" 
                                className='footer__link'
                                target='_blank'
                            >
                                My site
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}