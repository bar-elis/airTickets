import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import serverTickets from './tickets.json';

import Header from './components/header';
import Sidebar from "./components/sidebar";
import TicketsList from "./components/tickets-list/tickets-list";

function App() {
    const [ticketsObj, setTicketsObj] = useState([]);
    const [page, setPage] = useState(5);
    const [convers, setConvers] = useState('')
    const nextPage = () => {
        setPage(s => s + 5)
    }
    function conversionСurrency(e) {
        switch (e) {
            case "RUB":
                setConvers(e);
                setTicketsObj(s => s.map(el => {
                    let price = el.price + '';
                    if (price[price.length - 1] === '$'){
                        return {...el, price: Math.round(el.price.slice(0, -1) * 93) + '₽'}
                    }
                    if (price[price.length - 1] === '€'){
                        return {...el, price: Math.round(el.price.slice(0, -1) * 100) + '₽'}
                    }
                    if (price[price.length - 1] !== '$' && price[price.length - 1] !== '€' && price[price.length - 1] !== '₽'){
                        return {...el, price: el.price + '₽'}
                    }
                    return el
                }))
                break
            case "USD":
                setConvers(e);
                setTicketsObj(s => s.map(el => {
                    let price = el.price + '';
                    if (price[price.length - 1] === '€'){
                        return {...el, price: Math.round(el.price.slice(0, -1) * 1.07) + '$'}
                    }
                    if (price[price.length - 1] === '₽'){
                        return {...el, price: Math.round(el.price.slice(0, -1) / 93) + '$'}
                    }
                    if (price[price.length - 1] !== '$' && price[price.length - 1] !== '€' && price[price.length - 1] !== '₽'){
                        return {...el, price: Math.round(el.price / 93) + '$'}
                    }
                    return el
                }))
                break
            case "EUR":
                setConvers(e);
                setTicketsObj(s => s.map(el => {
                    let price = el.price + '';
                    if (price[price.length - 1] === '$'){
                        return {...el, price: Math.round(el.price.slice(0, -1) / 1.07) + '€'}
                    }
                    if (price[price.length - 1] === '₽'){
                        return {...el, price: Math.round(el.price.slice(0, -1) / 100) + '€'}
                    }
                    if (price[price.length - 1] !== '$' && price[price.length - 1] !== '€' && price[price.length - 1] !== '₽'){
                        return {...el, price: el.price / 100 + '€'}
                    }
                    return el
                }))
                break
        }
    }
    function sortTickets(transfersCount, flag){
        switch (transfersCount) {
            case 'all' :
                if (flag) {
                    setTicketsObj(serverTickets.tickets)
                } else {
                    setTicketsObj([])
                }
                conversionСurrency(convers)
                break
            case 0:
                if(flag) {
                    setTicketsObj(s => [...serverTickets.tickets.filter(el => el.stops === 0), ...s])
                } else {
                    setTicketsObj(s => [...ticketsObj.filter(el => el.stops !== 0)])
                }
                break
            case 1:
                if (flag) {
                    setTicketsObj(s => [...serverTickets.tickets.filter(el => el.stops === 1), ...s])
                } else {
                    setTicketsObj(s => [...ticketsObj.filter(el => el.stops !== 1)])
                }
                break
            case 2:
                if (flag) {
                    setTicketsObj(s => [...serverTickets.tickets.filter(el => el.stops === 2), ...s])
                } else {
                    setTicketsObj(s => [...ticketsObj.filter(el => el.stops !== 2)])
                }
                break
            case 3:
                if (flag) {
                    setTicketsObj(s => [...serverTickets.tickets.filter(el => el.stops === 3), ...s])
                } else {
                    setTicketsObj(s => [...ticketsObj.filter(el => el.stops !== 3)])
                }
                break
        }
        if(ticketsObj.length === 0) {
            conversionСurrency("RUB")
        }
    }
    return <>
        <Header />
        <main className="content">
            <Sidebar sortTickets={sortTickets} conversionСurrency={conversionСurrency} convers={convers}/>
            <div>
                <TicketsList ticketsObj={ticketsObj} page={page}/>
                {ticketsObj.length > page ? <button onClick={() => nextPage()} className="footer_but">Показать еще 5 билетов!</button> : false}
            </div>
        </main>
    </>
}
const container = createRoot(document.getElementById('root'));

container.render(<App />);

