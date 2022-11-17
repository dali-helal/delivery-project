import Logo from "../assets/logo.png"
import {
	FaSearch, FaUserAlt, FaAngleDown, FaCartPlus,
	FaMapMarkerAlt, FaSortUp, FaAngleRight, FaPlus, FaMinus,
} from "react-icons/fa"
import { useSelector } from "react-redux"
import { incrementQuantity } from "../redux/actions/cartActions"
import { decrementQuantity } from "../redux/actions/cartActions"
import { useDispatch } from "react-redux"

import { Link } from "react-router-dom"
const Nav = () => {
	const Quantity = useSelector((state) => state.cart.cartQuantity)
	const Foods = useSelector((state) => state.cart.Foods)
	const totalPrice = useSelector((state) => state.cart.totalPrice)
	const nameRestaurant = useSelector((state) => state.cart.nameRestaurant)
	const idRestaurant = useSelector((state) => state.cart.idRestaurant)
	const Dispatch = useDispatch()

	const handleDisplayCart = () => {
		document.querySelector('.container-cart').classList.toggle("displayCartHome")

		if (document.querySelector('.container-compte-btn').classList.value === "container-compte-btn displayCompteBtn") {
			document.querySelector('.container-compte-btn').classList.remove("displayCompteBtn")
		}
	}

	const handleDisplayCompteBtn = () => {
		document.querySelector('.container-compte-btn').classList.toggle("displayCompteBtn")
		if (document.querySelector('.container-cart').classList.value === "container-cart displayCartHome") {
			document.querySelector('.container-cart').classList.remove("displayCartHome")
		}

	}
	return (
		<nav>
			<div className="logo">
				<img src={Logo} alt="" />
			</div>
			<div className="mid-container">
				<div className="location">
					<fieldset >
						<legend >lieu de livraison</legend>
						<FaMapMarkerAlt className="icon-map" />
						<p>Monastir rue 6 stah jaber</p>
					</fieldset>
				</div>
				<div className="search-bar">
					<FaSearch color="#6F6F6F" className="search-icon" />
					<input type="text" placeholder="search for restaurants" />
					<button>Search</button>
				</div>
			</div>


			<div className="container">

				<div className="compte-btn" onClick={handleDisplayCompteBtn}>
					<FaUserAlt color="#6F6F6F" className="user-icon" />
					<p>Mohamedhgqdgqhgqdgj</p>
					<FaAngleDown color="#6F6F6F" className="angelDown-icon" />
					<div className="container-compte-btn">
						<FaSortUp className="FaSortUp-icon" color="#888888" size={"23px"} />
						<div>
							<Link to={"/my-account"}>
								<button>Compte</button>
							</Link>
						</div>

						<div>
							<a href="#">
								<button>Se deconnecter</button>
							</a>
						</div>
					</div>
				</div>

				<div className="container-cart-btn">
					<div className="cart-btn" onClick={handleDisplayCart} >
						<FaCartPlus color="#6F6F6F" className="cart-icon" />
						<div className="quantity">
							{Quantity}
						</div>
						<FaAngleDown color="#6F6F6F" className="angelDown-icon" />
					</div>
					<div className="container-cart" >
						<FaSortUp className="FaSortUp-icon" color="#888888" size={"23px"} />
						{Quantity == 0 ? <div className="citation">
							<p>
								I like food. I like eating. And I dont want to
							</p>
							<p>deprive myself of good food</p>
							<p>- Sarah Michelle Gellar-</p>
						</div> :
							<div className="cart">
								<div className="header">
									<h4>Votre Commande</h4>
									<p>{nameRestaurant}</p>
									<Link to={`/restaurant/${idRestaurant}`}>
										<span>voir le restaurant
											<FaAngleRight />
										</span>
									</Link>
								</div>
								<div className="container-food">
									{Foods.map((food, index) => {
										return (
											<div className="container-details" key={index}>
												<div className="food">
													<div>
														<p>{food.nameFood} </p>
														<p>{(food.quantity * food.price).toFixed(3)} TND</p>
													</div>
													<span>
														<FaMinus className="btn" onClick={() => {
															Dispatch(decrementQuantity(food.id))
														}} />
														<p>{food.quantity}</p>
														<FaPlus className="btn" onClick={() => {
															Dispatch(incrementQuantity(food.id));
														}} />
													</span>

												</div>
												<div className="list-sauces">
													<h3><span>Pack de base </span> : -sauces aux choix </h3>
													<div>  {food.ListSauces && food.ListSauces.map((sauce, index) => {
														return (
															<span key={index}>-{sauce} </span>
														)
													})}
													</div>

												</div>
												{!food.ListSupp.length == 0 && <div className="list-supplements">
													<h3><span>Supplement </span> : -Supplements aux  choix </h3>
													<div>
														{food.ListSupp.map((supp, index) => {
															return (
																<span key={index} >- {supp.value} {(supp.price).toFixed(3)}</span>
															)
														})}
													</div>
												</div>}
											</div>
										)
									})}
								</div>

								<div className="bottom">
									<div>
										<p>Article total</p>
										<p>{(totalPrice + 3).toFixed(3)} TND </p>
									</div>
									<button>Passer la commande </button>
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</nav>
	)
}
export default Nav

