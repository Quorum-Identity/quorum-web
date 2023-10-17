import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"
import { useTranslation } from "react-i18next"

const TermsConditions = () => {
    const [t,i18n] = useTranslation('global');
    window.scrollTo(0, 0)
    return <>
        <Navbar t = {t} i18n={i18n}/>
        <div className="container mt2">
            <h1 >{t("5131.p1")}</h1>
            <h2 style={{fontSize: '2rem'}}>{t("1257.p1")}</h2>
            <p>{t("12356.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("56743.p1")}</h2>
            <p>{t("214156.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("5144.p1")}</h2>
            <p>{t("11116.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("5672.p1")}</h2>
            <p>{t("4556.p1")}</p>
            
            </div>
        <FooterApp t = {t} i18n={i18n}/>
    
    </>
}

export default TermsConditions 