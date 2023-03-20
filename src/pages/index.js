import Head from 'next/head'
import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, {useRef, useState} from "react";
import axios from "./api/axios";
import Header from "../components/Header";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const FEEDER_URL = '/feeder';
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
        <>
            <Header></Header>
            <div style={{
                margin: "auto",
                paddingTop: 350,
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
                    <Image width={311} height={317} src={'/img/Circle.png'} alt={''}/>
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
                        <Image width={99} height={101} src={'/img/image3.png'} alt={''}/>
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
                    <Calendar onChange={onChange} returnValue={"range"} value={calendarDate} locale={"en-US"}
                              allowPartialRange={true} selectRange={true}/>
                </div>

            </div>

        </>
    )
}
