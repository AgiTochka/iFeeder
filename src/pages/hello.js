import styles from "@/styles/Home.module.css";
import styles2 from "@/styles/Hello.module.css";
import Image from "next/image";
import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";


export default function Hello() {
    const loaderProp = ({ src }) => {
        return src;
    }
    return (
        <>
            <div className={styles.artBlock} style={{
                background: "linear-gradient(180deg, #A56DC7 -44.29%, #FF6C99 16.66%, #FFC73B 66.42%, #A56DC7 126.3%)",
            }}>
                <Image width={345} height={307} className={styles.rect1} src={'/Feeder/img/Rectangle.png'} alt={''}/>
                <Image width={435} height={435} className={styles.rect2} src={'/Feeder/img/Rectangle2.png'} alt={''}/>
                <Image width={689} height={852} className={styles.cat} src={'/Feeder/img/catInBox.png'} alt={''}/>
            </div>
            <Header></Header>
            <h1 className={styles.mainText} style={{
                width: "80%",
                marginLeft: "20%",
                paddingTop: "5vh"
            }}>
                Первый раз здесь? <br />
                Я помогу настроить устройство
            </h1>

            <div style={{
                position: "relative",
                marginBottom: 250,
            }}>
                <div className={styles2.sec1Shadow}></div>
                <div className={styles2.section1}>
                    <div style={{
                        padding: 40,
                        width: "50%",
                    }}>
                        <h1 className={styles2.headText}>Что нужно сделать для подключения</h1>
                    </div>
                    <div style={{
                        padding: 20,
                        width: "50%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <p className={styles2.p}>
                            1. В списке WiFi сетей найди сеть "iFeeder" <br />
                            2. Далее, подключись к сети "iFeeder" <br />
                            3. После чего, нажимай кнопку "Подключиться" и следуй инструкциям по настройке сети
                        </p>

                        <button className={styles.btn} style={{
                            width: "30%",
                            fontFamily: 'Switzer',
                            fontStyle: "normal",
                            fontWeight: 800,
                            fontSize: 20,
                            margin: 35,
                            padding: 10,
                        }}>  Подключиться
                        </button>
                    </div>
                </div>
            </div>

            <Footer></Footer>


        </>
    )
}