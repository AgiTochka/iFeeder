import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import React, {useRef, useState} from "react";
import axios from "./api/axios";
import Header from "../components/Header";
import Calendar from 'react-calendar';
import Footer from "@/components/Footer";
import styles2 from "@/styles/Hello.module.css";
const FEEDER_URL = '/Feeder/index.php';
const FEEDER_URL2 = '/feeder';
const Iter = ({iterations, updateData}) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div style={{
            width: 50,
            height: 50,
            background: isActive ? ("linear-gradient(80.7deg, #FFC73B 0%, #FFBCBC 53.29%, #DDA5FF 102.74%)") : ("#D9D9D9"),
            color: "#fff",
            fontSize: 18,
            padding: 16,
            textAlign: "center",
            borderRadius: 50,
            margin: 5,
            cursor: "pointer",
        }} onClick={() => {
            setIsActive(!isActive);
            updateData(iterations);
        }}>
            {iterations}
        </div>
    )
}

const Itaration = ({updateIteration}) => {
    const day = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    return (<div style={{
            display: "flex"
        }}>
            {day.map((d, index) => {
                return (<Iter key={index} iterations={d} updateData={updateIteration}></Iter>)
            })}
        </div>
    )
}

export default function Home() {
    const loaderProp = ({src}) =>{
        return src;
    }
    const [iteration, setIteration] = useState(0);
    const [iteration2, setIteration2] = useState(0);
    const [portion, setPortion] = useState('');
    const [portion2, setPortion2] = useState('');
    const [calendarDate, onChange] = useState(new Date());
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const updateIteration = (value) => {
        setIteration(value);
    }

    const updateIteration2 = (value) => {
        setIteration2(value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const timeZone =
                Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ??
                "Europe/Stockholm";
            const response = await axios.post(FEEDER_URL,
                JSON.stringify({portion, iteration}),
                {
                    headers: {'Content-Type': 'application/json', "x-time-zone": timeZone },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
        } catch (err) {
            if (err.response?.status >= 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status >= 400) {
                setErrMsg('Missing Portion');
            } else if (err.response?.status <= 199) {
                setErrMsg('Server is not exists');
            } else {
                setErrMsg('Очень странная ошибка');
            }
        }
    }
    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            const timeZone =
                Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone ??
                "Europe/Stockholm";
            const response = await axios.post(FEEDER_URL2,
                JSON.stringify({portion2, iteration2, calendarDate}),
                {
                    headers: {'Content-Type': 'application/json', "x-time-zone": timeZone},
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
        } catch (err) {
            if (err.response?.status >= 500) {
                setErrMsg('No Server Response');
            } else if (err.response?.status >= 400) {
                setErrMsg('Missing Portion');
            } else if (err.response?.status <= 199) {
                setErrMsg('Server is not exists');
            } else {
                setErrMsg('Очень странная ошибка');
            }
        }
    }
    return (
        <div style={{
            width: "100vw",
        }}>
            <div className={styles.artBlock}>
                <Image width={345} height={307} className={styles.rect1} src={'/Feeder/img/Rectangle.png'} alt={''}/>
                <Image width={435} height={435} className={styles.rect2} src={'/Feeder/img/Rectangle2.png'} alt={''}/>
                <Image width={346} height={586} className={styles.rect3} src={'/Feeder/img/Rectangle3.png'} alt={''}/>
                <Image width={689} height={852} className={styles.cat} src={'/Feeder/img/lyingCat.png'} alt={''}/>
            </div>
            <Header></Header>
<h1 className={styles.mainText} style={{
                    width: "50%",
                    paddingTop: "2vh",
                    lineHeight: "130px",
                }}>
                    Автоматическая кормушка <br/>
                    для твоего питомца
                </h1>
            <div style={{
                margin: "auto",
                width: "80vw",
            }}>
                <h1 className={styles.h1}>
                    Все что тебе потребуется указать!
                </h1>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Image width={311} height={317} src={'/Feeder/img/Circle.png'} alt={''}/>
                    <div style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}>
                        <h3 className={styles.h3}>
                            Количество итераций кормления в день:
                        </h3>
                        <Itaration updateIteration={updateIteration}/>
                        <div className={styles.input}>
                            <h3 className={styles.h3}>Количество грамм в порции:</h3>
                            <input placeholder='Грамм' type='text' onChange={(e) => setPortion(e.target.value)}
                                   value={portion} required></input>
                        </div>
                        <button className={styles.btn} onClick={handleSubmit}>Применить</button>
                    </div>
                    <div style={{
                        width: "30%",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                    }}>
                        <Image width={99} height={101} src={'/Feeder/img/image3.png'} alt={''}/>
                        <h2 style={{
                            fontFamily: 'Plein',
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: 40,
                            color: "#FF6C99",
                        }}>Настройка <br/>кормления</h2>
                        <p className={styles.p}>
                            1. Выбери количество итераций кормления в день: <br/>
                            2. Укажи количество грамм в порции:
                        </p>
                    </div>
                </div>
                <div style={{
                    margin: "auto",
                }}>
                    <div style={{
                        position: "relative",
                        marginBottom: 250,
                    }}>
                        <div className={styles2.sec1Shadow}></div>
                        <div className={styles2.section1}>
                            <div style={{
                                padding: 20,
                                minWidth: "min-content",
                                width: "45%",
                            }}>
                                <h1 style={{
                                    fontSize: 70,
                                }} className={styles2.headText}>Индивидуальное кормление на каждый день</h1>
                            </div>
                            <div style={{
                                padding: 20,
                                width: "55%",
                                display: "flex",
                                margin: 20,
                                flexDirection: "column",
                                alignItems: "center"
                            }}>
                                    <Calendar  onChange={onChange} returnValue={"range"} value={calendarDate} locale="ru"
                                              allowPartialRange={true} selectRange={true}/>
                                <div style={{
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    marginTop: 30,
                                }}>
                                    <h3 className={styles.h3}>
                                        Количество итераций кормления в день:
                                    </h3>
                                    <Itaration updateIteration={updateIteration2}/>
                                    <div className={styles.input}>
                                        <h3 className={styles.h3}>Количество грамм в порции:</h3>
                                        <input placeholder='Грамм' type='text' onChange={(e) => setPortion2(e.target.value)}
                                               value={portion2} required></input>
                                    </div>
                                    <button className={styles.btn} onClick={handleSubmit2}>Применить</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
