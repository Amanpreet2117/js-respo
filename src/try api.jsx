// import React, { useState, useEffect } from 'react';


// function Try() {
//     const [post,setpost]=useState([])
//     useEffect(()=>{
//        fetch('https://dummyjson.com/products').then((responce)=>{
//         responce.json()})
//        .then((data)=>{
//         setpost(data.products)
//     }) 

//     },[])
//     console.log(post);
//     return (
//         <>
//         <div className="container">
//         <div className="row">
//             {post.map((result)=>(

//            <div className="col-lg-4 border">
//             <p><b>ID:</b>{result.id}</p>
//             <p><b>userId:</b>{result.userId}</p>
//             <p><b>title:</b>{result.title}</p>
//             <p><b>body:</b>{result.body}</p>

//               </div>
// ))}


     
//         </div>
//     </div>
//     </>
//         )
// }

// export default Try
