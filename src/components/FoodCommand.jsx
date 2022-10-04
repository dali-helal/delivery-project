import ListSauces from "../components/ListSauces"
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"
import ListSupp from "../components/ListSupplements"
import { useEffect } from "react"
import { useState } from "react"
const FoodCommand = ({name , price}) => {
    const handleDisplay = () => {
        document.querySelector('.food-command').classList.toggle('switch')
    }
    return (
        <section className="food-command">
            <div className="container">
                <div className="header">
                    <p> {name} </p>
                    <FaTimes onClick={handleDisplay} />
                </div>
                <div className="mid-container">
                    <h3>PACK DE BASE</h3>
                    <h2>sauces aux choix</h2>
                    <h4>choisissez</h4>
                    <div className="min-max">
                        <span>Min:1</span>
                        <span>Max:3</span>
                    </div>
                    <ListSauces />
                    <ListSupp />
                </div>
                <div className="buttom-container">
                    <div>
                        <p className="btn-decrement"><FaMinus color="#777" /></p>
                        <h4>1</h4>
                        <p className="btn-increment" ><FaPlus color="#CE1127" /></p>
                    </div>
                    <button>Ajouter au panier</button>
                </div>
            </div>
        </section>
    )
}
export default FoodCommand