import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const WaterMeasurePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const API_URL =
        "http://apis.data.go.kr/6430000/waterMeasureService/getWaterMeasure";
      const SERVICE_KEY =
        "GtCdxPe/8M0XQv89fSSAeXEq3zuDNrY7kN0JW8Scs3G77dgsPJgS9puaPtjqW4FUProP301E50w5S26ZBbjNBw==";

      try {
        const response = await axios.get(API_URL, {
          params: {
            serviceKey: SERVICE_KEY,
            currentPage: 1,
            perPage: 10,
          },
        });

        console.log("API Response:", response.data);

        const header = response.data?.header;
        if (header?.resultCode !== "00") {
          console.error("API 오류:", header?.resultMsg);
          setError(`API 오류: ${header?.resultMsg}`);
          return;
        }

        const result = response.data?.body || [];
        setData(result);
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
        setError("데이터를 가져오는 중 문제가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>수질 측정 데이터</h1>
      {loading && <p>데이터를 불러오는 중...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && data.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>시군</th>
              <th>하천 이름</th>
              <th>채취 지점</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.SIGUN}</td>
                <td>{item.RIVER_NM}</td>
                <td>{item.PICK_SPOT}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
      <br></br>
      <div className="linking">
        <Link to="/" className="link">목록으로 돌아가기</Link>
      </div>
    </div>
  );
};

export default WaterMeasurePage;
