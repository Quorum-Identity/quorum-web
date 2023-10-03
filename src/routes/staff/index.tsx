import StaffCard from "../../components/card-staff/StaticCard"
import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"
import { useTranslation } from "react-i18next"

const Staff = () => {
    const [t,i18n] = useTranslation('global');

    return (
        <>
            <Navbar t = {t} i18n={i18n}/>
            <div className="container">
                <h1 className="m1" style={{color: 'black', marginLeft: '0px'}}>{t("12315.p1")}</h1>
                <p>{t("41312.p1")}</p>
                <p>{t("54135.p1")}</p>
                <p>{t("7543.p1")}</p>
                <p>{t("7643.p1")}</p>
                <StaffCard/>
            </div>
            
            <FooterApp t = {t} i18n={i18n}/>
        </>
    )
}
export default Staff;