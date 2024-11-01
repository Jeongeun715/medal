import React, { useState } from 'react'


const MedalForm = (props) => {
    const handleChange = (event) => props.setCountry(event.target.value);
    const goldChange = (event) => props.setGold(Number(event.target.value));
    const silverChange = (event) => props.setSilver(Number(event.target.value));
    const bronzeChange = (event) => props.setBronze(Number(event.target.value));

    const [업데이트, set업데이트] = useState(0);

    return (
        <form className="input-group" onSubmit={props.handleSubmit}>
            <div className="input-field">
                <label>국가명</label>
                <input type="text" placeholder="국가 입력" value={props.country} onChange={handleChange} required />
            </div>
            <div className="input-field">
                <label>금메달</label>
                <input type="number" placeholder="0" value={props.gold} onChange={goldChange} required />
            </div>
            <div className="input-field">
                <label>은메달</label>
                <input type="number" placeholder="0" value={props.silver} onChange={silverChange} required />
            </div>
            <div className="input-field">
                <label>동메달</label>
                <input type="number" placeholder="0" value={props.bronze} onChange={bronzeChange} required />
            </div>
            <div className="button-group">
                <button type="submit">국가 추가</button>
                <button onClick={()=>{set업데이트(업데이트+1)}}>업데이트</button>
                
            </div>
        </form>
    )
}

export default MedalForm