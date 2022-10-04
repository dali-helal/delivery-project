import { FaStar } from "react-icons/fa"
import { useEffect, useState } from "react"

const Home = () => {
   const [data, setData] = useState([])
   const [isPending, setIspending] = useState(true)

   const FetchData = async () => {
      const response = await fetch("https://food-delivery-react-js.herokuapp.com/api/restaurant")
      const json = await response.json()
      setData(json)
      setIspending(false)
   }

   useEffect(() => {
      FetchData()
   }, [])


   return (
      <section className="home">
         <div className="container-grid">
            {
               data && data.map((restaurant, index) => {
                  return (
                    <a href={`/restaurant/${restaurant._id}`} >
                        <div className="conatiner-product">
                           <img src={restaurant.Img} alt="" />
                           <p>Delivers in 40 min</p>
                           <h4>{restaurant.NameRestaurant}</h4>
                           <div className="ratings">
                              <FaStar color="#FFA400" />
                              <FaStar color="#FFA400" />
                              <FaStar color="#FFA400" />
                              <FaStar color="#FFA400" />
                              <p>{restaurant.Ratings} ratings</p>
                           </ div>
                        </div>
                     </a>

                  )
               }

               )}
         </div>
      </section>
   )
}
export default Home