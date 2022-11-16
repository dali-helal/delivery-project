import Logo from "../assets/logo.png"
import { FaUserAlt, FaAngleDown,FaSortUp,FaPhoneAlt,FaUserCircle,FaRegEnvelope } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"

const MyAccount = () => {
    
    const [state,setState]=useState(1); 
    const action =(index)=>{
        setState(index); 
        console.log(index)
    }
    
    const handleDisplayCompteBtn = () => {
         document.querySelector(".se-deconnecte-btn").classList.toggle("displayCompteBtn");
    }
    return (
        <section className="my-account">
            <nav>
                <div className="logo">
                    <Link to ={"/"}>
                    <img src={Logo} alt="" />
                    </Link>
                 
                </div>
                <div className="compte-btn" onClick={handleDisplayCompteBtn}>
                    <FaUserAlt color="#6F6F6F" className="user-icon" />
                    <p>Mohamedhgqdgqhgqdgj</p>
                    <FaAngleDown color="#6F6F6F" className="angelDown-icon" />
                </div>
                <div className="se-deconnecte-btn"  >
                <FaSortUp className="FaSortUp-icon" color="#888888" size={"23px"} />
                    <button>se deconnecte</button>
                </div>
            </nav>
            <section>
                 <div className="container">
                      <div className="bloc-taps">
                        <div onClick={()=>action(1)} className={`${state==1? 'tab active' :'tab'}`} >Mon profil</div>
                        <div onClick={()=>action(2)} className={`${state==2? 'tab active' :'tab'}`} >Mes commandes</div>
                        <div onClick={()=>action(3)} className={`${state==3? 'tab active' :'tab'}`}>Adresses sauvegardés</div>
                        <div onClick={()=>action(4)} className={`${state==4? 'tab active' :'tab'}`}>Cartes sauvegardées</div>
                        <div onClick={()=>action(5)} className={`${state==5? 'tab active' :'tab'}`} >Mes favoris</div>
                      </div>
                      <div className="contents">
                           <div className={`${state==1? 'content active' :'content'}`}>
                               <div className="profil">
                                 <span> <FaUserCircle className="icon"/> 
                                   <h4>Mohamed Ali ben helal</h4>
                                 </span>
                                 <span> <FaRegEnvelope/> 
                                   <h4>dalihelal6@gmail.com</h4>
                                 </span>
                                 <span> <FaPhoneAlt/> 
                                   <h4>52 886 446</h4>
                                 </span>
                                 <button>
                                    Editez le profil
                                 </button>
                               </div>
                           </div>
                           <div className={`${state==2? 'content active' :'content'}`}>
                           tap2
                           </div>
                           <div className={`${state==3? 'content active' :'content'}`}>
                           tap3
                           </div>
                           <div className={`${state==4? 'content active' :'content'}`}>
                                <div className="cartes-sauvegardes">
                                <p>I am a better;; person; when; I; have; less;<br/> on; my; plate.;
                                </p>
                                </div>
                           </div>
                           <div className={`${state==5? 'content active' :'content'}`}>
                              <div className="mes-favoris">
                                <p>If this is; coffee,; 
                                    please; bring; me; 
                                    some; tea; but; if;<br/>
                                    this; is; tea, please; bring; me; some; coffee.;
                                </p>
                              </div>
                           </div>
                      </div>
                 </div>
            </section>
        </section>

    )

}
export default MyAccount