import {useRouter} from "next/router";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function FiveOhOh() {
    const router = useRouter();
    const loaderProp = ({src}) =>{
        return src;
    }
    return (<>
        <div className={styles.artBlock} style={{
            background: "linear-gradient(180deg, #A56DC7 -44.29%, #FF6C99 16.66%, #FFC73B 66.42%, #A56DC7 126.3%)",
        }}>
            <Image width={345} height={307} className={styles.rect1} src={'/Feeder/img/Rectangle.png'} alt={''}/>
            <Image width={435} height={435} className={styles.rect2} src={'/Feeder/img/Rectangle2.png'} alt={''}/>
            <Image width={346} height={586} className={styles.rect3} src={'/Feeder/img/Rectangle3.png'} alt={''}/>
            <Image width={1088} height={912} className={styles.cat2} src={'/Feeder/img/catOnBooks.png'} alt={''}/>
        </div>
        <Header></Header>
            <h1 className={styles.mainText} style={{
                width: "60%",
                paddingLeft: "12vw",
                paddingTop: "2vh",
                lineHeight: "130px",
            }}>
                Что-то пошло не так, давай попробуем еще раз?
            </h1>
        <Footer></Footer>

    </>)
}