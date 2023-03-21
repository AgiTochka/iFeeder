import React from 'react';
import styles from './styles/Header.module.css';
import Image from "next/image";
import {useRouter} from "next/router";


export default function Header({artBg}) {
    const router = useRouter()
    const { pathname, asPath, query } = router
    const locale = useRouter().locale
    const defaultLocale = useRouter().defaultLocale
    return (
        <>
            <header className={styles.header}>
                <div className={styles.conteiner}>
                    <a onClick={()=>router.push('/')}>
                        <h1 className={styles.h1}>IFEEDER</h1>
                    </a>
                    <div className={styles.headerMenu}>
                        <a onClick={() => router.push('/hello')}>
                            { locale ==="ru" && <p>Настройки сети iFeeder</p>}
                            { locale === ("en-US" ||"default") && <p>Reconnect iFeeder</p> }
                        </a>
                        <a onClick={() => router.push('/')}>

                            { locale ==="ru" && <p>О проекте</p>}
                            { locale === ("en-US" ||"default") && <p>About</p>}
                        </a>
                        {(locale != 'ru') ?
                            <a onClick={() => router.push({ pathname, query }, asPath, {locale: 'ru'})}>
                            <p>RU</p>
                            </a> :
                            <a onClick={() => router.push({ pathname, query }, asPath, {locale: 'en-US'})}>
                                <p>EN</p>
                            </a>
                        }

                    </div>

                </div>
            </header>


        </>
    )
}

