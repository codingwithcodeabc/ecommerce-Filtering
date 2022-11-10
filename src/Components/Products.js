import React, { useState } from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import jacket from "../assets/jacket.jpg"
import iphone from "../assets/iphone.png"
import phone from "../assets/phone.jpg"
import apple from "../assets/apple.jpg"
import orange from "../assets/orange.jpg"

const data = [
    {
        id: 1,
        title: "Jacket",
        img: jacket,
        price: "1200",
        category: "Cloth"
    },
    {
        id: 2,
        title: "Iphone",
        img: iphone,
        price: "81200",
        category: "Phone"
    },
    {
        id: 3,
        title: "Iphone 10",
        img: phone,
        price: "90000",
        category: "Phone"
    },
    {
        id: 4,
        title: "Apple",
        img: apple,
        price: "180",
        category: "Fruit"
    },
    {
        id: 5,
        title: "Orange",
        img: orange,
        price: "180",
        category: "Fruit"
    },
]

export default function Products() {
    let [alldata, setAllData] = useState(data);
    let uniqueCategory = [...new Set(data.map(item => item.category))];

    return (
        <div className='container products'>
            <Navbar categoryName={uniqueCategory} data={data} setAllData={setAllData} />
            <Cards data={alldata} />
        </div>
    )
}
