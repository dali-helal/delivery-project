import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { useState } from "react"
import Logo from "../assets/logo.png"
import { FaShoppingBasket } from "react-icons/fa"
import FoodCommand from "../components/FoodCommand";
import CommandDetails from "../components/CommandDetails"
import { useSelector } from "react-redux"
const PagerestaurantDetails = () => {
    const cartQuantity = useSelector((state) => state.cart.cartQuantity)
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState([])
    const [isPending, setIsPendig] = useState(true)
    const [foodDetails,setFood] = useState([]);
    const FetechData = async () => {
        const response = await fetch(`https://food-delivery-react-js.herokuapp.com/api/restaurant/${id}`)
        const json = await response.json()
        setRestaurant(json)
        setIsPendig(false)
    }
    useEffect(() => {
        FetechData()
    }, [])
    return (
        <section className="restaurant-details" >
            <nav className="nav">
                <a href="/">
                    <div>
                        <img src={Logo} alt="" />
                    </div>
                </a>

            </nav>
            <img src={restaurant.Img} className="img-restaurant" />
            <section className="section-interne">
                <div className="categorie-list">
                    {!isPending && restaurant.Foods.map((item, index) => {
                        return (
                            <a href={`#${item.categorie}`}  key={index}>
                                <h2>{item.categorie}</h2>
                            </a>
                        )
                    })}
                </div>
                <div className="conatiner">
                    {!isPending && restaurant.Foods.map((item, index) => {
                        return (
                            <div key={item._id} className="foods-list" id={`${item.categorie}`} >
                                <div className="categorie-name" >
                                    {item.categorie}
                                </div>
                                {item.Food.map((food, index) => {
                                    return (
                                        <>

                                            <div className="container-food" key={food._id}>
                                                <div className="food-details">
                                                    <p>{food.name}</p>
                                                    <h4>{food.price}00 TND</h4>
                                                    <h5>1PCS</h5>
                                                </div>
                                                <button className="add-btn" onClick={() => {
                                                    setFood(food);
                                                    document.querySelector('.food-command')
                                                        .classList.toggle('switch')
                                                }}>AJOUTER AU PANIER</button>
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className="container-cart">

                    {cartQuantity == 0  ? <> <p>Votre panier</p>
                        <FaShoppingBasket className="ShoppingBasket" /> </> :

                        <div className="cart">
                            <img src={restaurant.Img} alt="" />
                            <h3>{restaurant.NameRestaurant}</h3>
                            <CommandDetails />
                        </div>

                    }
                    
                </div>

            </section>
            <FoodCommand className="food-command" food={foodDetails} />
        </section>
    )
}
export default PagerestaurantDetails