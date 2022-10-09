import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addFood } from "../redux/actions/cartActions"
import { useState } from "react"
const FoodCommand = ({ food }) => {

    const handleDisplay = () => {
        document.querySelector('.food-command').classList.toggle('switch')
    }


    const ListSupplement = [{
        value: "Formage",
        price: 0.3
    }
        ,
    {
        value: "pain",
        price: 0.3
    }
        , {
        value: "Frite",
        price: 0.3
    }]


    const Dispatch = useDispatch()

    const [sauceArray, setArray] = useState([])
    const [supplementArray, setArraySupp] = useState([])


    const handleChange = (e) => {
        if (e.target.checked) {
            let arr = sauceArray
            arr.push(e.target.value)
            setArray(arr)
        }
        else {
            let arr = sauceArray
            arr = arr.filter((prop) => prop != e.target.value)
            setArray(arr)
        }
    }


    const addFoodToCart = () => {



        Dispatch(addFood({
            id: food._id,
            nameFood: food.name,
            price: food.price,
            quantity: 1,
            ListSauces: sauceArray,
            ListSupp: supplementArray,
            priceEl: food.price,
        }))
        handleDisplay()

        const inputs = Array.from( document.getElementsByTagName("input") );

        inputs.forEach((input,index) =>{
            if(input.type === "checkbox"){
                input.checked = false;
            }
        })
        setArray([])
        setArraySupp([])
    }


    return (
        <section className="food-command">
            <div className="container">
                <div className="header">
                    <p> {food.name} </p>
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

                    {/* List sauces statique  */}
                    <div className="list-sauces">
                        <div>
                            <input type="checkbox" value="Sauce harissa" onChange={handleChange} />
                            <label>Sauce harissa</label>
                        </div>
                        <span>TND 0.00</span>
                    </div>
                    <div className="list-sauces">
                        <div>
                            <input type="checkbox" value="Sauce ketchup" onChange={handleChange} />
                            <label>Sauce ketchup</label>
                        </div>
                        <span>TND 0.00</span>
                    </div>
                    <div className="list-sauces">
                        <div>
                            <input type="checkbox" value="Sauce mayonnaise" onChange={handleChange} />
                            <label> Sauce mayonnaise</label>
                        </div>
                        <span>TND 0.00</span>
                    </div>
                    <div className="list-sauces">
                        <div>
                            <input type="checkbox" value="sauce barbecue" onChange={handleChange} />
                            <label>sauce barbecue</label>
                        </div>
                        <span>TND 0.00</span>
                    </div>

                    <h3>Supplement</h3>
                    {/* List supplementaire statique  */}
                    <div className="list-supplement">
                        {ListSupplement.map((item, index) => {

                            return (
                                <div className="containerInput">
                                    <div className="container-input">
                                        <input type="checkbox" value={item.value} onChange={(e) => {

                                            if (e.target.checked) {
                                                let arrSupp = supplementArray
                                                arrSupp.push(item)
                                                setArraySupp(arrSupp)
                                            }
                                            else {
                                                let arrSupp = supplementArray
                                                arrSupp = arrSupp.filter((prop) => prop != item)
                                                setArraySupp(arrSupp)
                                            }
                                        }} />
                                        <label>{item.value}</label>

                                    </div>
                                    <span>TND {item.price}</span>
                                </div>
                            )
                        })}

                    </div>


                </div>


                <div className="buttom-container">
                    <div>
                        <p className="btn-decrement"><FaMinus color="#777" /></p>
                        <h4>1</h4>
                        <p className="btn-increment" ><FaPlus color="#CE1127" /></p>
                    </div>
                    <button onClick={addFoodToCart}>Ajouter au panier</button>
                </div>
            </div>
        </section>
    )
}
export default FoodCommand