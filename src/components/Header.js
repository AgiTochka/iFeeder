import React from 'react';
import styles from './styles/Header.module.css';
import Image from "next/image";
import {useRouter} from "next/router";


export default function Header() {
    const router = useRouter()
    const locale = useRouter().locale
    return (
        <>
            <div className={styles.artBlock}>
                <Image width={345} height={307} className={styles.rect1} src={'/img/Rectangle.png'} alt={''}/>
                <Image width={435} height={435} className={styles.rect2} src={'/img/Rectangle2.png'} alt={''}/>
                <Image width={346} height={586} className={styles.rect3} src={'/img/Rectangle3.png'} alt={''}/>
                <Image width={689} height={852} className={styles.cat} src={'/img/lyingCat.png'} alt={''}/>
            </div>
            <header className={styles.header}>
                <div className={styles.conteiner}>
                    <h1 className={styles.h1}>IFEEDER</h1>
                    <div className={styles.headerMenu}>
                        <a onClick={() => router.push('/')}>
                            { locale == "ru" && (<p>Настройки сети iFeeder</p>)}
                            {locale == "en" && <p>Reconnect iFeeder</p> }
                        </a>
                        <a onClick={() => router.push('/')}>
                            <p>About</p>
                        </a>
                        <a onClick={() => router.push('/ru')}>
                            <p>RU</p>
                        </a>
                    </div>

                </div>
            </header>
            <h1 className={styles.mainText}>
                Automatic Feeder <br/>
                for your pet
            </h1>

        </>
    )
}

