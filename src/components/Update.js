import React from 'react'
import axios from "axios";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Update() {
    const [id, setId] = useState("");
    const nameR = useRef();
    const salepriceR = useRef();
    const priceR = useRef();
    const salepercentR = useRef();
    const dtimeR = useRef();
    const storenameR = useRef();
    const categoryR = useRef();
    const scoreR = useRef();

    const updateList = () => {
        if (!nameR.current.value) {
            alert("상품명을 입력하세요");
            return;
        }
        if (!salepriceR.current.value) {
            alert("가격을 입력하세요");
            return;
        }
        if (!dtimeR.current.value) {
            alert("폐기까지 남은 시간을 입력하세요");
            return;
        }
        if (!storenameR.current.value) {
            alert("편의점 이름을 입력하세요");
            return;
        }

        const dataUpdate = {
            name: nameR.current.value,
            saleprice: salepriceR.current.value,
            price: priceR.current.value,
            salepercent: salepercentR.current.value,
            dtime: dtimeR.current.value,
            storename: storenameR.current.value,
            category: categoryR.current.value,
            score: scoreR.current.value
        };

        axios.put(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`, dataUpdate)
            .then((response) => {
                console.log(response);
                alert("업데이트되었습니다.");
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <h1>상품 수정</h1>
            <div className="fieldd">
                <label>ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="inputstyle" />
            </div>

            <div className="fieldd">
                <label>상품명</label>
                <input ref={nameR} type="text" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>가격</label>
                <input ref={salepriceR} type="number" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>원가</label>
                <input ref={priceR} type="number" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>할인율</label>
                <input ref={salepercentR} type="number" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>폐기까지 남은 시간</label>
                <input ref={dtimeR} type="number" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>편의점 이름</label>
                <input ref={storenameR} type="text" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>카테고리</label>
                <input ref={categoryR} type="text" className="inputstyle" />
            </div>
            <div className="fieldd">
                <label>평점</label>
                <input ref={scoreR} type="number" className="inputstyle" />
            </div>
            <br />
            <br />
            <button className="button submit" onClick={updateList}>상품 수정하기</button>

            <br />
            <div className="linking">
                <Link to="/manage" className="link">매니저 모드로 돌아가기</Link>
            </div>

        </>
    )
}

