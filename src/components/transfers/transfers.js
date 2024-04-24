import React from "react";
import './transfers.css'

const Transfers = ({name, funCheck, check}) => {
  const checked = check.find(el => el.name === name)
  return <label className="transfers_input" key={name} htmlFor={name}>
      <input type="checkbox" className="transfers_check" id={name} onChange={(event) => funCheck(event.target)} checked={checked.flag}/>
      <span>{name}</span>
  </label>
}

export default Transfers;