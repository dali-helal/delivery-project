import {FaStar} from  "react-icons/fa"
import img from "../assets/images/img1.jpg"
const Home=()=>{


    return(
        <section className="home">
             <div className="container-grid">
                     <div className="conatiner-product">
                        <img src={img} />
                        <p>Delivers in 40 min</p>
                        <h4>Mama chami</h4>
                        <div className="ratings">
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <p>4.45 ratings</p>
                        </div>
                     </div>
                     <div className="conatiner-product">
                        <img src={img} />
                        <p>Delivers in 40 min</p>
                        <h4>Nom restaurants</h4>
                        <div className="ratings">
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <p>4.45 ratings</p>
                        </div>
                     </div>
                     <div className="conatiner-product">
                        <img src={img} />
                        <p>Delivers in 40 min</p>
                        <h4>Nom restaurants</h4>
                        <div className="ratings">
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <FaStar color="#FFA400"/>
                        <p>4.45 ratings</p>
                        </div>
                     </div>
             </div>
        </section>
    )
}
export default Home