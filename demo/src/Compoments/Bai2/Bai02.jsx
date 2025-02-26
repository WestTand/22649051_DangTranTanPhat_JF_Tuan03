import React, { useState } from 'react'

import './Bai02.css'
const Bai02 = () => {
  const [soTien, setSoTien] = useState(0)
  const [phanTram, setPhanTram] = useState(0)
  const [mongMuon, setMongMuon] = useState(0)
  var array = []
  function handleClick() {
    let soTien2 = parseFloat(soTien)
    let phanTram2 = parseFloat(phanTram)
    let mongMuon2 = parseFloat(mongMuon)
    while (soTien2 < mongMuon2) {
      soTien2 = soTien2 + soTien2 * phanTram2 / 100

    }
  }
  function thayDoiTien(e) {
    setSoTien(e.target.value)
  }
  function thayDoiPhanTram(e) {
    setPhanTram(e.target.value)
  }
  function thayDoiMongMuon(e) {
    setMongMuon(e.target.value)
  }

  return (
    <div className='flex-container_02'>
        <input type="text" placeholder='So Tien' onChange={thayDoiTien}/>
        <input type="text" placeholder='Phan tram' onChange={thayDoiPhanTram}/>
        <input type="text"  placeholder='Mong Muon' onChange={thayDoiMongMuon}/>
        <button onClick={handleClick}>Tinh</button>

        <table>
        </table>
    </div>
  )
}

export default Bai02