import Logo from "../assets/logo.png"
import { FaSearch, FaUserAlt, FaAngleDown, FaCartPlus, FaMapMarkerAlt } from "react-icons/fa"
const Nav = () => {

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
        <div className="compte-btn">
          <FaUserAlt color="#6F6F6F" className="user-icon" />
          <p>Mohamedhgqdgqhgqdgj</p>
          <FaAngleDown color="#6F6F6F" className="angelDown-icon" />
        </div>
        <div className="cart-btn">
          <FaCartPlus color="#6F6F6F" className="cart-icon" />
          <div className="quantity">
            0
          </div>
          <FaAngleDown color="#6F6F6F" className="angelDown-icon" />
        </div>
      </div>
    </nav>
  )
}
export default Nav