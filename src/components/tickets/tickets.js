import React from "react";
import { format } from 'date-fns';
import "./tickets.css";

const Tickets = ({tickets}) => {
    let stopsCount;
    let price = tickets.price;
    const dateStart = tickets.arrival_date.split('.');
    const dateEnd = tickets.departure_date.split('.');
    const dateStartFormat = format(new Date(`20${dateStart[2]}`, dateStart[1]- 1, dateStart[0]), 'd MMM yyyy, eee');
    const dateEndFormat = format(new Date(`20${dateEnd[2]}`, dateEnd[1] - 1, dateEnd[0]), 'd MMM yyyy, eee');
    switch (price.length) {
        case 5:
            price = [...price.slice(0, 1), ' ', ...price.slice(1)].join('');
            break;
        case 6:
            price = [...price.slice(0, 2), ' ', ...price.slice(2)].join('');
            break;
        case 7:
            price = [...price[0], ' ', ...price.slice(0, 3), ' ', ...price.slice(3)].join('');
            break;
    }
    switch (true) {
        case tickets.stops === 0 || tickets.stops === 5 || tickets.stops === 6:
            stopsCount = `${tickets.stops} пересадок`
            break
        case tickets.stops === 1:
            stopsCount = `${tickets.stops} пересадка`
            break
        case tickets.stops === 2 || tickets.stops === 3 || tickets.stops === 4:
            stopsCount = `${tickets.stops} пересадки`
            break
    }
    return <section className='ticket'>
     <div className="logo_price">
         <span className="company_logo"></span>
         <button className="company_price">Купить<br/>за {price}</button>
     </div>
     <div className="info_ticket__time">
         <div className="info_time">
             <span className="time">{tickets.arrival_time}</span>
             <center className="info_ticket__transfers">{stopsCount}</center>
             <span className="time time_end">{tickets.departure_time}</span>
         </div>
         <div className="info">
             <div className="info_ticket">
                 <span>{tickets.origin}, {tickets.origin_name}</span>
                 <span className="info_ticket__date">{dateStartFormat}</span>
             </div>
             <div className="info_ticket info_ticket__end">
                 <span>{tickets.destination_name}, {tickets.destination}</span>
                 <span className="info_ticket__date">{dateEndFormat}</span>
             </div>
         </div>
     </div>
    </section>
}

export default Tickets;
