import React, { useState, useEffect } from 'react';

import {useNavigate} from "react-router-dom"

function API() {
    const[post,setpost]=useState([]);
    const navigate = useNavigate();
    // const [cpdata,setcpdata]=(5)
    // const [cpshow,setcpshow]=(0)
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((ddata)=>{
            return ddata.json();
        }).then((data)=>{
            setpost (data.products);
        })
    //    let pageno=[];
    //    for(i=0;i<=post.length/cpdata;i++){
    //     pageno.push(i)
    //    }
    //    console.log(pageno);
    },[])

    // console.log(post);
    var proproduct=(image,title,description,price,discountPercentage)=>{
        navigate("/product",{state:{
            image:image,
            title:title,
            description:description,
            price:price,
            discountPercentage:discountPercentage,
        }})
    }

    return (
        <div className="container">
            <div className="row">
                {post.map((result)=>(

               <div className="col-lg-4 border">
                <p><b>ID:</b>{result.id}</p>
                <p><img src={result.images[0]}alt="" width="100%"height="200px"/></p>
                <p><b>description:</b>{result.title}</p>

                <p><b>description:</b>{result.description}</p>
                <p><b>price:</b>{result.price}</p>
                <p><b> discountPercentage:</b>{result. discountPercentage}</p>
                <button className='btn btn-primary '>add to card</button>
                <button onClick={()=>proproduct(
                result.images[0],
                result.title,
                result.description,
                result.price,
                result.discountPercentage,
                )} 
                className='btn btn-primary mx-2'>view now</button>


                  </div>
))}


         
            </div>
        </div>
    )
}

export default API
