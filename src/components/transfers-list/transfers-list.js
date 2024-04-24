import React, {useState} from "react";
import './transfers-list.css';

import Transfers from "../transfers";

const TransfersList = ({sortTickets}) => {
    const [allTransfers, setAllTransfers] = useState(false);
    const [notTransfers, setNotTransfers] = useState(false);
    const [oneTransfers, setOneTransfers] = useState(false);
    const [twoTransfers, setTwoTransfers] = useState(false);
    const [threeTransfers, setThreeTransfers] = useState(false);
    const transferOptions = [{ name: 'Все', flag: allTransfers}, {name: 'Без пересадок', flag: notTransfers}, {name: '1 пересадка', flag: oneTransfers},
        {name: '2 пересадки', flag: twoTransfers}, {name: '3 пересадки', flag: threeTransfers}];
    const funCheck = (e) => {
        switch (e.id) {
            case 'Все':
                if (e.checked) {
                    setAllTransfers(true);
                    setNotTransfers(true);
                    setOneTransfers(true);
                    setTwoTransfers(true);
                    setThreeTransfers(true);
                    sortTickets('all', true)
                } else {
                    setAllTransfers(false);
                    setNotTransfers(false);
                    setOneTransfers(false);
                    setTwoTransfers(false);
                    setThreeTransfers(false);
                    sortTickets('all', false)
                }
                break
            case 'Без пересадок':
                if (e.checked) {
                    if(oneTransfers && twoTransfers && threeTransfers) {
                        setAllTransfers(true);
                        setNotTransfers(true);
                        setOneTransfers(true);
                        setTwoTransfers(true);
                        setThreeTransfers(true);
                    } else {
                        setNotTransfers(true);
                    }
                    sortTickets(0, true)
                } else {
                    if(oneTransfers && twoTransfers && threeTransfers) {
                        setAllTransfers(false);
                    }
                    sortTickets(0, false)
                    setNotTransfers(false);
                }
                break
            case '1 пересадка':
                if (e.checked) {
                    if(notTransfers && twoTransfers && threeTransfers) {
                        setAllTransfers(true);
                        setNotTransfers(true);
                        setOneTransfers(true);
                        setTwoTransfers(true);
                        setThreeTransfers(true);
                    } else {
                        setOneTransfers(true);
                    }
                    sortTickets(1, true)
                } else {
                    if(notTransfers && twoTransfers && threeTransfers) {
                        setAllTransfers(false);
                    }
                    sortTickets(1, false)
                    setOneTransfers(false);
                }
                break
            case '2 пересадки':
                if (e.checked) {
                    if(notTransfers && oneTransfers && threeTransfers) {
                        setAllTransfers(true);
                        setNotTransfers(true);
                        setOneTransfers(true);
                        setTwoTransfers(true);
                        setThreeTransfers(true);
                    } else {
                        setTwoTransfers(true);
                    }
                    sortTickets(2, true)
                } else {
                    if(notTransfers && oneTransfers && threeTransfers) {
                        setAllTransfers(false);
                    }
                    sortTickets(2, false)
                    setTwoTransfers(false);
                }
                break
            case '3 пересадки':
                if (e.checked) {
                    if(notTransfers && oneTransfers && twoTransfers) {
                        setAllTransfers(true);
                        setNotTransfers(true);
                        setOneTransfers(true);
                        setTwoTransfers(true);
                        setThreeTransfers(true);
                    } else {
                        setThreeTransfers(true);
                    }
                    sortTickets(3, true)
                } else {
                    if(notTransfers && oneTransfers && twoTransfers) {
                        setAllTransfers(false);
                    }
                    sortTickets(3, false)
                    setThreeTransfers(false);
                }
                break
        }

    }
    const transfersCheck = transferOptions.map(el => {
       return <Transfers name={el.name} funCheck={funCheck} check={transferOptions} key={el.name}/>
    })
    return <div >
        <h3 className="currency_title">Количество пересадок</h3>
        <form className="transfers" >
            {transfersCheck}
        </form>

    </div>
}

export default TransfersList;