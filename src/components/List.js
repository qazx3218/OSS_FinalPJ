// import React from 'react'
// import axios from "axios";
// import { useState } from 'react';
// import { Link } from "react-router-dom";

// export default function List() {

//     let defaultList = [];

//     const [tempList, setTempList] = useState(defaultList);

//     const getList = () => {
//         axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/finalproject")
//             .then((response) => {
//                 console.log(JSON.stringify(response.data));
//                 setTempList(response.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

//     return (
//         <>
//             <div>{tempList.map((each) => <div><input value={each.title} /></div>)} </div>
//             <button onClick={getList}>call list</button>
//             <br />     <br />
//             <Link to="/create">Create</Link>
//             <br />
//             <Link to="/update">Update</Link>
//             <br />
//             <Link to="/detail">Detail</Link>
//             <br />
//             <Link to="/delete">Delete</Link>

//         </>

//     )
// }




// // import React from 'react'

// // export default function List({ list }) {
// //     return (
// //         <table id="movie_list">
// //             <thead>
// //                 <tr>
// //                     <th>상품명</th>
// //                     <th>할인가</th>
// //                     <th>원가</th>
// //                     <th>할인율</th>
// //                     <th>페기까지</th>
// //                     <th>편의점</th>
// //                     <th>카테고리</th>
// //                     <th>평점</th>
// //                 </tr>
// //             </thead>
// //             <tbody >
// //                 {list.map((food) => (
// //                     <tr key={food.id}>
// //                         <td>{food.name}</td>
// //                         <td>{food.saleprice}</td>
// //                         <td>{food.price}</td>
// //                         <td>{food.salepercent}</td>
// //                         <td>{food.dtime}</td>
// //                         <td>{food.storename}</td>
// //                         <td>{food.category}</td>
// //                         <td>{food.score}</td>
// //                     </tr>
// //                 ))}
// //             </tbody>
// //         </table>
// //     )
// // }
