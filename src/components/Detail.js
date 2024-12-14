import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);


  useEffect(() => {
    axios
      .get(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`)
      .then((response) => {
        setSelected(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!selected) {
    return <div>lodaing..</div>;
  }

  return (
    <>
      <div className="detail">
        <h1>{selected.name}</h1>
        <div className="detailinfo">    <span>판매 가격 </span>  {selected.saleprice}</div>
        <div className="detailinfo"> <span>원가 </span> {selected.price}</div>
        <div className="detailinfo"> <span>할인율 </span>{selected.salepercent}</div>
        <div className="detailinfo"><span>폐기까지 남은 시간 </span> {selected.dtime}</div>
        <div className="detailinfo"><span>편의점 </span> {selected.storename}</div>
        <div className="detailinfo"><span>카테고리 </span> {selected.category}</div>
        <div className="detailinfo"><span>평점 </span> {selected.score}</div>
      </div>
      <br />
      <div className="linking">
        <Link to="/" className="link">목록으로 돌아가기</Link>
      </div>
    </>
  );
}
