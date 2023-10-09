import styles from '../../styles/Home.module.css'
import BG from '../../images/computer.png'
const Poster = () => {
    return <section className={styles.home}>
        <div className={styles.title}> Big Sale 20%</div>
        <div className={styles.product}>
            <div>
                <div className={styles.subtitle}>the bestseller of 2022</div>
                <h1 className={styles.head}> LeNNoN r2d2 with NVIDIA 5090TI</h1>
                <button>Shop Now</button>
            </div>
            <div className={styles.image}>
                <img src={BG} alt=''/>
            </div>
        </div>
    </section>
}
export default Poster;
