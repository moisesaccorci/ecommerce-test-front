import React, { useState, useEffect } from "react";
import api from "../api/api";
import '../styles/Item.css'

export default function Items() {
    const [data, setData] = useState<any['products']>([])

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
      }
      
      function formatDate(date) {
        return [
          padTo2Digits(date.getDate()),
          padTo2Digits(date.getMonth() + 1),
          date.getFullYear(),
        ].join('/');
      }

    useEffect(() => {
        api.get("/products")
            .then((response) => setData(response.data))
            .catch((err) => {
                console.error(err)
            })
    })
    
    return (
        <section className="item_listing">
            {data.map((item, index) => (
                <div className="item_props" key={item.id}>
                    <h2>{item.name}</h2>
                    <h3>${item.price}</h3>
                    <h4>{item.description}</h4>
                    <p>Created at {formatDate(new Date(item.created_at))}</p>


                </div>
            ))}
        </section>
    )
}