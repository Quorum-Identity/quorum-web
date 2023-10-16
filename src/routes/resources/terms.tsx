import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"
import { useTranslation } from "react-i18next"

const TermsConditions = () => {
    const [t,i18n] = useTranslation('global');
    window.scrollTo(0, 0)
    return <>
        <Navbar t = {t} i18n={i18n}/>
        <div className="container mt2">
            <h1 >Términos y Condiciones</h1>
            <h2 style={{fontSize: '2rem'}}>1. Privacidad de Datos</h2>
            <p>1.1. Compromiso de Privacidad
Nos tomamos muy en serio la privacidad de tus datos. Garantizamos que tus datos personales no serán compartidos, vendidos ni divulgados a terceros sin tu consentimiento expreso, excepto en las circunstancias que se describen en nuestra Política de Privacidad.

1.2. Protección de Datos
Implementamos medidas de seguridad y protección de datos para garantizar la confidencialidad y la integridad de la información que nos proporcionas.
</p>
            <h2 style={{fontSize: '2rem'}}>2. Recopilación de Datos</h2>
            <p>2.1. Información del Usuario
Para utilizar nuestra plataforma, recopilaremos cierta información personal necesaria para brindarte nuestros servicios. Esta información se utiliza únicamente para los fines específicos de la plataforma y de acuerdo con nuestra Política de Privacidad.</p>
            <h2 style={{fontSize: '2rem'}}>3. Responsabilidades de los Usuarios</h2>
            <p>3.1. Uso Adecuado
Te comprometes a utilizar la plataforma de acuerdo con las leyes y regulaciones aplicables, así como con estos Términos y Condiciones. No debes utilizar la plataforma con fines ilegales o inapropiados.</p>
            <h2 style={{fontSize: '2rem'}}>4. Cambios en los Términos y Condiciones</h2>
            <p>4.1. Actualizaciones
Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Cualquier cambio se publicará en la plataforma y entrará en vigencia inmediatamente. Te recomendamos revisar estos términos periódicamente.</p>
            
            </div>
        <FooterApp t = {t} i18n={i18n}/>
    
    </>
}

export default TermsConditions 