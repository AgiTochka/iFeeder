import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, {useRef, useState} from "react";
import axios from "./api/axios";
import Header from "../components/Header";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {useRouter} from "next/router";
import Footer from "@/components/Footer";

const FEEDER_URL = '/Feeder/index.php';
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
    const [portion, setPortion] = useState('');
    const [calendarDate, onChange] = useState(new Date());
    const errRef = useRef();
    const [errMsg, setErrMsg] = useState('');
    const updateIteration = (value) => {
        setIteration(value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(FEEDER_URL,
                JSON.stringify({portion, iteration, calendarDate}),
                {
                    headers: {'Content-Type': 'application/json'},
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
                    Everything you need!
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
                            Number of feeding iterations per day:
                        </h3>
                        <Itaration updateIteration={updateIteration}/>
                        <div className={styles.input}>
                            <input placeholder='Grams' type='text' onChange={(e) => setPortion(e.target.value)}
                                   value={portion} required></input>
                        </div>
                        <button className={styles.btn} onClick={handleSubmit}>TEST</button>
                    </div>
                    <div>
                        <Image width={99} height={101} src={'/Feeder/img/image3.png'} alt={''}/>
                        <h2 style={{
                            fontFamily: 'Plein',
                            fontStyle: "normal",
                            fontWeight: 300,
                            fontSize: 30,
                            textAlign: "center",
                            color: "#FF6C99",
                        }}>Pet Food</h2>
                    </div>
                </div>
                <div style={{
                    margin: "auto",
                }}>
                    <Calendar onChange={onChange} returnValue={"range"} value={calendarDate} locale="ru"
                              allowPartialRange={true} selectRange={true}/>
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}
