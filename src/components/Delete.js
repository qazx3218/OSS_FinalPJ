import React from 'react'
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Delete() {

    const [id, setId] = useState("");

    const axios_delete = () => {
        axios.delete(`https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject/${id}`)
            .then((response) => {
                alert("삭제되었습니다.");
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <>
            <h1>상품 삭제</h1 >
            <div className="fieldd">
                <label>ID</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="inputstyle" />
            </div>
            <br />
            <button className="button submit" onClick={axios_delete}>상품 삭제하기</button>
            <br />
            <div className="linking">
                <Link to="/manage" className="link">매니저 모드로 돌아가기</Link>
            </div>

        </>

    )
}


