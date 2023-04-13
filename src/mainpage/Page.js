import React, { useState } from 'react'
import './Page.css';
  
function Page({ data,cart, setCart }) {
    const [searchInput, setSearchInput] = useState('');
    
     
    const handleClick = (val) => {   
        setCart([...cart,val]) 
    }

    const handlChange = (e) => {
        setSearchInput(e.target.value)
    }


    return (
        <div className='centerpage'>
            <div className='search'>
                <input value={searchInput} onChange={handlChange} placeholder='search'></input>
            </div>

            <div className='box d-flex flex-wrap' id='content'>

                {
                    data
                        .filter((val) => {
                            if (searchInput === "") {
                                return val;
                            } else if (val.description.toLowerCase().includes(searchInput.toLowerCase())) {
                                return val;
                            }
                        })
                        .map((val) => {
                            return (
                                <div className='innerbox col-lg-6 col-sm-12 col-md-6 col-xl-4  p-5'>
                                    <img src={val['image-url']} alt='img' />
                                    <p className='contentdetails'>{val.description}</p>
                                    <p className='price'>Price ${val.price}</p>
                                    <button onClick={()=> handleClick(val)} className='cartbutton'>Add to cart</button>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default Page

