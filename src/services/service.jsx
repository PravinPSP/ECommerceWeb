import { useState } from "react";

export const getAllProduct = async () => {
    const headers = { 'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo' };
    const data = await fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products', { headers })
        .then(response => response.json())
        .then((data) => { return data.products });
    return data;
}

export const getMaterial = async () => {
    const headers = { 'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo' };
    const data = fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material', { headers })
        .then(response => response.json())
        .then((data) => { return data.material });
    return data;
}

export const getColor = async () => {
    const headers = { 'Authorization': 'Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo' };
    const data = fetch('https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors', { headers })
        .then(response => response.json())
        .then((data) => { return data.colors });
    return data;
}
