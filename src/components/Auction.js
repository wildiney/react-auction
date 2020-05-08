import React, { useState, useEffect } from 'react'
import './Auction.css'
import Modal from './Modal/Modal'

const Auction = (props) => {
    const [value, setvalue] = useState(950)
    const [arrematante, setArrematante] = useState("Fernando")
    const [lances, setLances] = useState(14)
    const [data, setData] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    })
    const [modal, setModal] = useState(false)
    const showModal = () => {
        modal===true? setModal(false) : setModal(true)
    }

    const makeALance = (valor)=>{
        showModal()
        setvalue(valor)
        setArrematante("Fabiana")
        setLances(lances + 1)
    }

    useEffect(() => {

        const countDownDate = new Date("Jun 12, 2020 18:00:00").getTime()
        const interval = setInterval(() => {
            let now = new Date().getTime();
            let diff = countDownDate - now;

            let days = Math.floor(diff / (1000 * 60 * 60 * 24))
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            let seconds = Math.floor((diff % (1000 * 60)) / 1000)

            setData({
                days: days, hours: hours, minutes: minutes, seconds: seconds
            })

        }, 1000)

        return () => { clearInterval(interval) }
    }, [])



    return (
        <React.Fragment>
            <div className="auction">
                <div className="auction__title">
                    <h1>{props.title}</h1>
                    <h2>{props.author}</h2>
                </div>
                <div className="auction__thumbnail">
                    <img alt="Fotografia" className="auction__thumbnail-image" src={props.imagem} />
                </div>
                <div className="auction__content">
                    <table className="auction__content-data">
                        <tbody>
                            <tr>
                                <td>Arrematante</td>
                                <td>Valor Inicial</td>
                                <td>Lances</td>
                            </tr>
                            <tr>
                                <td>{arrematante}</td>
                                <td>R$ 30,00</td>
                                <td>{lances}</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 className="auction__content-expires">Os lances terminam em:</h3>
                    <table className="auction_content-expires-date">
                        <tbody>

                            <tr>
                                <td>{data.days}</td>
                                <td>{data.hours}</td>
                                <td>{data.minutes}</td>
                                <td>{data.seconds}</td>
                            </tr>
                            <tr>
                                <td>dias</td>
                                <td>horas</td>
                                <td>minutos</td>
                                <td>segundos</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="auction__bid-value">R$ {value},00</div>
                    <button className="btn auction__bid-button" onClick={showModal}>Aumentar a oferta</button>
                </div>
            </div>
            { modal ? <Modal value={value+30} click={makeALance} /> : ''}
        </React.Fragment>
    )
}

export default Auction