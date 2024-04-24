import React from "react";
import './currency.css';

const Currency = ({conversionСurrency, convers}) => {
    return <div>
        <h3 className="currency_title">Валюта</h3>
        <button
            className={convers === "RUB" ? "currency_but but_right currency_but__focus" : "currency_but but_right"}
            id="RUB"
            onClick={(e) => conversionСurrency(e.target.id)}
        >RUB</button>
        <button
            className={convers === "USD" ? "currency_but currency_but__focus" : "currency_but"}
            id="USD"
            onClick={(e) => conversionСurrency(e.target.id)}
        >USD</button>
        <button
            className={convers === "EUR" ? "currency_but but_left currency_but__focus" : "currency_but but_left"}
            id="EUR"
            onClick={(e) => conversionСurrency(e.target.id)}
        >EUR</button>
    </div>
}

export default Currency;