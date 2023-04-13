import "./Rightsidebar.css";
import React, { useState, useEffect } from "react";

const openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
};

const closeNav = () => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
};

function Rightsidebar({ cart }) {
    console.log(cart, '1717')
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        total();
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
    };

    const handleClick = () => {
        alert(`Total bill is ${cartTotal}`)
    }
    return (
        <div className="rightsidebar">
            <div id="mySidebar" className="sidebar">
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
                    ×
                </a>
                <p><b>ADD PRODUCTS IN CART</b></p>
                <div id="cartItem"><b>

                    {cart.map((val) => {
                        return (
                            <div className="itemsincart d-flex justify-content-between">
                                <img className="cartimage" src={val['image-url']}></img>
                                <span className="itemtext borderbottom">{val.description}</span>
                                <span className="itemtext">${val.price}</span>
                            </div>

                        )
                    })}
                </b></div>
                <div className="foot">
                    <h3>Total:</h3>
                    <h2 className="total">$ {cartTotal}</h2>

                </div>
                <button className="checkoutbtn" onClick={handleClick}><b>checkout</b></button>
            </div>

            <div id="main">
                <button className="openbtn d-flex" onClick={openNav}>
                    <span> ☰</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-cart"
                        viewBox="0 0 16 16"
                    >
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    <span className="carticon" id="count" >{cart.length}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Rightsidebar;



