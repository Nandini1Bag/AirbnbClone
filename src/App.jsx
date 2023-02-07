import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import data from "./data"
import './App.css'

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
            />
        )
    })        
    
            
    return (
        <div>
            <Navbar />
            <Hero />
            <section >
            <div class="card-header"><h2>Best sellers</h2></div>
            <div className="cards-list">
            {cards}
            </div>
            </section>
        </div>
    )
}