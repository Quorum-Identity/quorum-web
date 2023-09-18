import { useNavigate } from "react-router-dom";
import { getStore } from "../../hooks/store/user.slice";
import { useAppSelector } from "../../hooks/store/store";
import { useEffect } from "react";
import Icons from '@reacticons/ionicons'
import Navbar from "../../components/navbar";
import FooterApp from "../../components/footer/footer";



const PricingHub = () => {
    const {user} = useAppSelector(getStore);
    const navigate = useNavigate();
    useEffect(() => {

        if(user._id === ""){
            //navigate('/login', {replace: true});
        }
    }, []);
    return (
    <div className="">
        <Navbar/>
       
        <div >
            <img width='100%' src="https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png"/>
          </div>
        <div className="container">
        <h1 className="m1" style={{color: 'black'}}>Get your a custom plan</h1>
        <div className='linea-container displayBlockResponsive'>
            <article className='card'>
                <div className='card-body'>
                    <div id='logotipo'>
                       <a href="#">😄</a>
                    </div>
                    <section className='card-info'>
                            <h3>Personal</h3>
                            <p>Perfect plan for starters</p>
                            <h2>Free</h2>
                            <p>For a Lifetime</p>
                           
                            <button className="button">
                                Current Plan
                            </button>

                            <div className="group-lista">
                                <ul>
                                    <div>
                                    <li>
                                        <Icons name="checkmark-outline" /> 
                                        <p>Detailed post analytics</p>
                                        </li>
                                    </div>

                                <div>
                                <li>
                                        <p>Shared with 5 teams memebers</p>
                                        <Icons name="checkmark-outline" /> 
                                </li>
                                </div>

                                <div>
                                <li>
                                        <Icons name="checkmark-outline"  />        
                                        <p>Syn across devices</p>
                                </li>
                                </div>

                                <div>
                                <li>
                                        <Icons name="checkmark-outline" />   
                                        <p>Reach and impressions analytics</p>
                                        </li>
                                </div>

                                <li>
                                        <p>Up to 6 social profile</p>
                                        <Icons name="checkmark-outline" /> 
                                </li>
                                    
                                </ul>
                            </div>
                          
                    </section>
                </div>
            </article>

            <article className='card'>
                 <div className='card-body'>
                 <div id='logotipo'>
                       <a href="#">🎉</a>
                    </div>
                    <section className='card-info'>
                        <div className="card-2">
                            <h3>Professional</h3>
                            <p>For users who want to do more</p>
                            <h2>$99</h2>
                            <p>For a Lifetime</p>
                            
                            <button className="button boton">
                            Current Plan
                            </button>
                        
                            <div className="group-lista list-2">
                                <ul>
                                <li>
                                   <p>Detailed post analytics</p>
                                   <Icons name="checkmark-outline"  />        
                                </li>

                                <li>

                                 <p>Unlimited teams memebers</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Syn across devices</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Reach and impressions analytics</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Up to 6 social profile</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>
                                    
                                </ul>
                            </div>

                        </div>
                    </section>

                </div>
            </article>

            <article className='card'>
                <div className='card-body'>
                <div id='logotipo'>
                       <a href="#">🔥</a>
                    </div>
                    <section className='card-info'>
                        <div>
                            <h3>Interprice</h3>
                            <p>Analyze your company</p>
                            <h2>$184</h2>
                            <p>For a Lifetime</p>
                            <button className="button">
                            Current Plan
                            </button>

                            <div className="group-lista">
                                <ul>
                                <li>
                                   <p>Detailed post analytics</p>
                                   <Icons name="checkmark-outline"  />        
                                </li>

                                <li>

                                 <p>Unlimited teams memebers</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Syn across devices</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Reach and impressions analytics</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>Unlimited social profile</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>
                                    
                                </ul>
                            </div>
                          
                        </div>
                    </section>

                </div>
            </article>
        </div>
        </div>
        <FooterApp/>
    </div>
    )
}

export default PricingHub;