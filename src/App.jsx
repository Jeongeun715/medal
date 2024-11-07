import React, { useState } from 'react';
import MedalForm from '../components/MedalForm';
import MedalList from '../components/MedalList';

function App() {
  const [country, setCountry] = useState('');
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const [medals, setMedals] = useState([]);
  

  const handleSubmit = (event) => {
    event.preventDefault();

    const newEntry = { country, gold, silver, bronze };
    j
    
    
    // 새 항목 추가와 동시에 금메달 기준으로 내림차순 정렬
    setMedals((prevList) => [...prevList, newEntry].sort((a, b) => b.gold - a.gold));

    // 입력값 초기화
    setCountry('');
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  //삭제하는 코드
  const handleDelete = (index) => {
    setMedals((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <MedalForm 
      handleSubmit ={handleSubmit} 
      country={country}
      setCountry={setCountry}
      gold={gold}
      setGold={setGold}
      silver={silver}
      setSilver={setSilver}
      bronze={bronze}
      setBronze={setBronze}
      />
      {/* 이름 = {데이터-함수} */}
      <div>
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th>금메달</th>
              <th>은메달</th>
              <th>동메달</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            <MedalList medals={medals} handleDelete={handleDelete}/>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
