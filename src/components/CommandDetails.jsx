import { FaTimes, FaPlus, FaMinus } from "react-icons/fa"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { incrementQuantity } from "../redux/actions/cartActions"
import { decrementQuantity } from "../redux/actions/cartActions"

const CommandDetails = () => {
    const Foods = useSelector((state) => state.cart.Foods)
    const totalPrice = useSelector((state) => state.cart.totalPrice)
    const Dispatch = useDispatch()
    return (

        <div className="container-conmand-details">
            {Foods.map((food, index) => {
                return (
                    <div className="command-details" key={index}>
                        <div className="header">
                            <h4>{food.nameFood}</h4>
                            <span><FaMinus color="#777" size={"8px"} onClick={()=>{
                                Dispatch(decrementQuantity(food.id))
                            }} /></span>
                            <h3>{food.quantity}</h3>
                            <span><FaPlus color="#777" size={"8px"} onClick={() => {
                                Dispatch(incrementQuantity(food.id));

                            }} /></span>
                            <h2>{(food.quantity * food.price).toFixed(3)} TND</h2>
                        </div>
                        <h4>1* {food.priceEl} TND</h4>
                        <div className="list-pack-base">
                            <h3><span>Pack de base </span> : -sauces aux choix </h3>
                            <div>
                                { food.ListSauces && food.ListSauces.map((sauce,index)=>{
                                    return(
                                        <span key={index}>-{sauce} </span>
                                    )
                                })}
                              
                            </div>
                        </div>
                       { !food.ListSupp.length==0 && <div className="list-supplement">
                            <h3><span>Supplement </span> : -Supplements aux  choix </h3>
                            <div>
                            { food.ListSupp.map((supp,index)=>{
                                    return(
                                        <span key={index} >- {supp.value} {(supp.price).toFixed(3)}</span>
                                    )
                                })}
                            </div>
                        </div>  } 
                    </div>
                )
            })}


            <div className="container-pay">
                <div id="div">
                    <h4>Article total</h4>
                    <h3>{(totalPrice).toFixed(3)} TND</h3>
                </div>
                <div id="div">
                    <h4>Frais de livraiosn </h4>
                    <h3>3.000 TND</h3>
                </div>
                <div id="div">
                    <h4>total</h4>
                    <h3>{(totalPrice+3).toFixed(3)} TND</h3>
                </div>
                <div className="btn-passe-commande">
                    <div id="div-btn-commande" color="Black">
                        <h4>A payer</h4>
                        <h3>{(totalPrice+3).toFixed(3)} TND</h3>
                    </div>
                    <button>Passer la commande</button>
                </div>
            </div>

        </div>

    )

}
export default CommandDetails