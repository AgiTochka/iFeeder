import React from 'react';
import styles from './styles/Header.module.css';
import Image from "next/image";
import { useRouter } from "next/router";


export default function Header() {
    const router = useRouter()
    const { pathname, asPath, query } = router
    return (
        <>
            <header className={styles.header}>
                <div className={styles.conteiner}>
                    <a onClick={() => router.push('/')}>
                        <h1 className={styles.h1}>IFEEDER</h1>
                    </a>
                    <div className={styles.headerMenu}>
                        <a onClick={() => router.push('/hello')}>
                            <p>Настройки сети iFeeder</p>
                        </a>
                        <a href={'#about'}>

                            <p>О проекте</p>
                        </a>

                    </div>

                </div>
            </header>


        </>
    )
}

