import React, { useState } from 'react'

export default function Navbar({ categoryName, data, setAllData }) {
    let [cName, setCName] = useState("");
    const handleCategoryName = (name) => {
        setCName(name);
        let filteredData = data.filter(item => item.category === name);

        if (filteredData.length) {
            setAllData(filteredData)
        } else {
            setAllData(data);
        }
    }

    console.log("cName", cName)

    return (
        <>
            <h2 className='heading'>Eccomerce Filtering</h2>
            <div className='navbar'>
                <div className='item' onClick={() => handleCategoryName("")} style={{ backgroundColor: cName == "" ? "rgb(28, 164, 155)" : "" }}>
                    All
                </div>
                {
                    categoryName.map((name, index) => (
                        <div className='item' style={{ backgroundColor: name === cName ? "rgb(28, 164, 155)" : "" }} onClick={() => handleCategoryName(name)} key={index}>
                            {name}
                        </div>
                    ))
                }
            </div>
        </>
    )
}
