import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

export default function Manager() {

  let defaultList = [];

  const [tempList, setTempList] = useState(defaultList);

  if (tempList.length === 0) {
    axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject")
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setTempList(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <h1>매니저 모드</h1>
      <br />
      <div style={{ display: 'flex' }}>
        <div className="buttonbox">
          <Link to="/create" className="button">상품 등록</Link>
        </div>
        <div className="buttonbox">
          <Link to="/update" className="button">상품 수정</Link>
        </div>
        <div className="buttonbox">
          <Link to="/delete" className="button">상품 삭제</Link>
        </div>
      </div>
      <br></br>

      <table style={{ width: '900px', margin: '0 auto', backgroundColor: 'white', borderRadius: '8px' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명</th>
            <th>할인가</th>
            <th>원가</th>
            <th>할인율</th>
            <th>남은 시간</th>
            <th>편의점</th>
            <th>카테고리</th>
            <th>평점</th>
          </tr>
        </thead>

        <tbody>
          {tempList.map((each) => (
            <tr key={each.id}>
              <td>{each.id}</td>
              <td>{each.name}</td>
              <td>{each.saleprice}</td>
              <td>{each.price}</td>
              <td>{each.salepercent}</td>
              <td>{each.dtime}</td>
              <td>{each.storename}</td>
              <td>{each.category}</td>
              <td>{each.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="linking">
        <Link to="/" className="link">사용자 화면으로 돌아가기</Link>
      </div>
    </>
  )
}
