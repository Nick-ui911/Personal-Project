import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const DineInHotel = () => {
    const [Ditem, setDitem] = useState([]);
    const { id2 } = useParams();

    useEffect(() => {
        Dinedata();
    }, [id2]); 

    const Dinedata = async () => {
        let response = await fetch(`http://localhost:4000/api/dineout/${id2}`); 
        let json = await response.json();
        setDitem(json);
    };

    return (
        <div className="dinein-container">
            <div className="image-section">
                <img src={Ditem.image} alt={Ditem.name} className="hotel-image" />
                <div className="button-container">
                    <button className="order-button">BOOK NOW</button>
                </div>
            </div>
            <div className="details-section">
                <h2 className="hotel-name">{Ditem.name}</h2>
                <h3 className="hotel-time">{Ditem.time}</h3>
                <h4 className="hotel-address">{Ditem.address}</h4>
            </div>
        </div>
    );
};

export default DineInHotel;