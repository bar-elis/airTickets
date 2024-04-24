import React from "react";
import './sidebar.css';

import TransfersList from '../transfers-list';
import Currency from "../currency";

const Sidebar = ({sortTickets, conversionСurrency, convers}) => {
    return <div className="sidebar">
        <Currency conversionСurrency={conversionСurrency} convers={convers}/>
        <TransfersList sortTickets={sortTickets}/>
    </div>
}
export default Sidebar;