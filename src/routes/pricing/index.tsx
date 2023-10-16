import { useNavigate } from "react-router-dom";
import { getStore } from "../../hooks/store/user.slice";
import { useAppSelector } from "../../hooks/store/store";
import { useEffect } from "react";
import Icons from '@reacticons/ionicons'
import Navbar from "../../components/navbar";
import FooterApp from "../../components/footer/footer";
import './styles.css'
import { useTranslation } from "react-i18next"


const PricingHub = () => {
    const [t,i18n] = useTranslation('global');
    const {user} = useAppSelector(getStore);
    const navigate = useNavigate();
    useEffect(() => {

        if(user._id === ""){
            //navigate('/login', {replace: true});
        }
    }, []);
    return (
    <div className="">
        <Navbar t = {t} i18n={i18n}/>
       
        <div >
            <img width='100%' src="https://cdn.discordapp.com/attachments/1128670410058252369/1128822422674624633/Politicos.png"/>
          </div>
        <div className="container">
        <h1 className="m1" style={{color: 'black'}}>{t("6543.p1")}</h1>
        <div className='linea-container displayBlockResponsive'>
            <article className='card'>
                <div className='card-body'>
                    <div id='logotipo'>
                       <a href="#">😄</a>
                    </div>
                    <section className='card-info'>
                            <h3>{t("654375.p1")}</h3>
                            <p>{t("6546.p1")}</p>
                            <h2>{t("65469.p1")}</h2>
                            <p>{t("6509.p1")}</p>
                           
                            <button className="button">
                            {t("650987.p1")}
                            </button>

                            <div className="group-lista">
                                <ul>
                                    <div>
                                    <li>
                                        <Icons name="checkmark-outline" /> 
                                        <p>{t("6509872.p1")}</p>
                                        </li>
                                    </div>

                                <div>
                                <li>
                                        <p>{t("65098722.p1")}</p>
                                        <Icons name="checkmark-outline" /> 
                                </li>
                                </div>

                                <div>
                                <li>
                                        <Icons name="checkmark-outline"  />        
                                        <p>{t("650965.p1")}</p>
                                </li>
                                </div>

                                <div>
                                <li>
                                        <Icons name="checkmark-outline" />   
                                        <p>{t("6509653.p1")}</p>
                                        </li>
                                </div>

                                <li>
                                        <p>{t("65096537.p1")}</p>
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
                            <h3>{t("650965371.p1")}</h3>
                            <p>{t("6509653711.p1")}</p>
                            <h2>$99</h2>
                            <p>{t("65096537114.p1")}</p>
                            
                            <button className="button boton">
                            {t("650987.p1")}
                            </button>
                        
                            <div className="group-lista list-2">
                                <ul>
                                <li>
                                   <p>{t("650965371143.p1")}</p>
                                   <Icons name="checkmark-outline"  />        
                                </li>

                                <li>

                                 <p>{t("65.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("654.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("6544.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("65441.p1")}</p>
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
                            <h3>{t("654415.p1")}</h3>
                            <p>{t("61.p1")}</p>
                            <h2>$184</h2>
                            <p>{t("612.p1")}</p>
                            <button className="button">
                            {t("650987.p1")}
                            </button>

                            <div className="group-lista">
                                <ul>
                                <li>
                                   <p>{t("6509872.p1")}</p>
                                   <Icons name="checkmark-outline"  />        
                                </li>

                                <li>

                                 <p>{t("6128.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("61288.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("664.p1")}</p>
                                 <Icons name="checkmark-outline"  />        
                                </li>

                                <li>
                                        
                                 <p>{t("6640.p1")}</p>
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
        <FooterApp t = {t} i18n={i18n}/>
    </div>
    )
}

export default PricingHub;