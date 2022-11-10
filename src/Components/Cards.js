import React from 'react'
import jacket from "../assets/jacket.jpg"
import iphone from "../assets/iphone.png"
import phone from "../assets/phone.jpg"

export default function Cards({ data }) {
    return (
        <div className='cards'>
            {
                data.map(item => (
                    <div className='card' key={item.id}>
                        <img src={item.img} alt="jacket" />
                        <div>
                            <p className='title'>{item.title}</p>
                            <p className='price'>price: <span> {item.price} BDT</span></p>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}
