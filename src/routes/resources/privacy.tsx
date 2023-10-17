import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"
import { useTranslation } from "react-i18next"

const PrivacyPolicy = () => {
    const [t,i18n] = useTranslation('global');
    window.scrollTo(0, 0)
    return <>
        <Navbar t = {t} i18n={i18n}/>
        <div className="container mt2">
            <h1 >{t("51345.p1")}</h1>
            <h2 style={{fontSize: '2rem'}}>{t("31341.p1")}</h2>
            <p>{t("9801.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("1231.p1")}</h2>
            <p>{t("8781.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("9810.p1")}</h2>
            <p>{t("9865.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("13566.p1")}</h2>
            <p>{t("58161.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("19286.p1")}</h2>
            <p>{t("123851.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("131111.p1")}</h2>
            <p>{t("123125.p1")}</p>
            <h2 style={{fontSize: '2rem'}}>{t("12347.p1")}</h2>
            <p> {t("56144.p1")}
                </p>
            </div>
        <FooterApp t = {t} i18n={i18n}/>
    
    </>
}

export default PrivacyPolicy 