import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SingleMessageAndPaypal() {
    const [ singlemessage, setSingleMessage ] = useState({})
    const {id} = useParams()
    useEffect( () => {
        async function getSingleMessage() {
            await axios.get( `https://syrianrevolution1.com/messagePaypal/${id}` ).then( ( result ) => {
                setSingleMessage( result.data )
                console.log(result)
           }).catch((error)=>console.log(error));
        }
        getSingleMessage()
    },[id])
  return (
    <div>
      <div className={`headDashboard`}>
        <p>
          {" "}
          {singlemessage?.category === "paypal"
            ? "حساب بيبال"
            : singlemessage?.category === "message"
            ? "رسالة التوجية"
            : ""}
        </p>
      </div>
      <div style={{ marginTop: "30px", padding: "20px" }}>
        <h4 style={{ color: "#0d3a5a" }}>
          {singlemessage.category === "paypal"
            ? " حساب بيبال : "
            : singlemessage.category === "message"
            ? "رسالة التوجية : "
            : ""}
        </h4>
        {singlemessage?.category === "message" ? (
          <p>{singlemessage?.content}</p>
        ) : singlemessage?.category === "paypal" ? (
          <a href={`https://${singlemessage?.content}`}>
            {singlemessage?.content}{" "}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
