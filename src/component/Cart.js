import React, { Component, useState } from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";


import React from "react";
import useOnline from "../utils/useOnline";
import Offline from "./Offline";



const Cart = () => {
    const onlinecheck = useOnline();
    if (!onlinecheck) {
        return <Offline />;
    }

    return (
        <div>
            <h1>Your Cart</h1>
          
        </div>
    );
};

export default Cart;