import React from "react";
import './tickets-list.css';
import { Alert } from 'antd';

import Tickets from "../tickets";

const TicketsList = ({ticketsObj, page}) => {
    const listTickets = ticketsObj.slice(0, page);
    if (ticketsObj.length !== 0) {
        return listTickets.map(el => {
            return <Tickets tickets={el} key={Math.floor(Math.random() * 100000)}/>
        })
    } else {
        return (
            <Alert
                message="Warning"
                description="Рейсов, подходящих под заданные фильтры, не найдено."
                type="warning"
                showIcon
            />
        )
    }
}

export default TicketsList;