import styles from '../../styles/Footer.module.css';
import {ROUTES} from "../../utils/routes";
import LOGO from '../../images/logo.svg';
import {Link} from "react-router-dom";

const Footer = () => {
    return (<section className={styles.footer}>
        <div className={styles.logo}>
            <Link to={ROUTES.HOME}>
                <img src={LOGO} alt="Stuff"/>
            </Link>
        </div>
        <div className={styles.rights}>Developed by {""}
            <a href="https://www.instagram.com/reva_yana/" target="_blank" rel="noreferrer">Reva</a>
        </div>
        <div className={styles.socials}>
            <a href="https://www.instagram.com/reva_yana/" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                </svg>
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <svg className="icon">
                    <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                </svg>
            </a>
        </div>
    </section>)
}
export default Footer;
