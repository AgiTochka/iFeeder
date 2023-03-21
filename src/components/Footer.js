import styles from "./styles/Footer.module.css";

export default function Footer() {
    return (
        <footer>
            <div style={{
                width: "90vw",
                margin: "auto",
                border: "2px solid #D0BCFF",
            }}></div>
            <div style={{
                width: "80vw",
                margin: "auto",
                padding: 50,
            }}>
                <h1 className={styles.logo}>
                    <b>IFEEDER</b>
                </h1>
                <p className={styles.p}>
                    Проект является Некоммерческой деятельностью. Данная проектная деятельность является энтузиазмом
                    разработчиков, не имеющая извлечение прибыли в качестве основной цели своей деятельности и не
                    распределяющая полученную прибыль между участниками. Исполнители проекта не являются социально
                    ориентированной организацией, не явлются иностранными агентами, не имеют задолженностей по налогам и
                    сборам, иным предусмотренным законодательством Российской Федерации обязательным платежам.
                </p>

            </div>
            <div className={styles.authors}>© 2023 iFEEDER, DImanchous&AgiTochka, Made with ❤️</div>

        </footer>
    )
}