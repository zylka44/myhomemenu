import React from 'react';
import Card from './Card';
import kopytka from '../assets/kopytka.jpg';
import spaghetti from '../assets/spaghetti.jpg';
import pizza from '../assets/pizza.jpg';
import sushi from '../assets/sushi.jpg';
import shakshuka from '../assets/shakshuka.jpg';
import khachapuri from '../assets/khachapuri.jpg';
import tomatosoup from '../assets/tomatosoup.jpg';
import porridge from '../assets/porridge.jpg';
import broth from '../assets/broth.jpg';
import fruitsoup from '../assets/fruitsoup.jpg';
import ratatouille from '../assets/ratatouille.jpg';

const CardList = ({dinners}) => {
    const imag = [
        kopytka, spaghetti, pizza, sushi, shakshuka,
        khachapuri, tomatosoup, porridge, broth, fruitsoup, ratatouille
    ];
    const dishesArray = dinners.map((din, i) => {
        return <Card 
            key={i}
            id={dinners[i].id} 
            name={dinners[i].name} 
            meal={dinners[i].meal} 
            graphics={imag[dinners[i].id - 1]} 
        />
    })
    return (
        <div style={{ padding: '0 5vh'}}>
            {dishesArray}
        </div>
    )
}

export default CardList;