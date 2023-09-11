import StaffCard from "../../components/card-staff/StaticCard"
import FooterApp from "../../components/footer/footer"
import Navbar from "../../components/navbar"

const Staff = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1 className="m1" style={{color: 'black', marginLeft: '0px'}}>Who makes this possible?</h1>
                <p>At Quorum, we believe in the importance of a strong and collaborative work culture. We know that a positive work environment not only increases employee satisfaction, but also drives innovation and project success. Our work culture is based on key principles that guide our actions and decisions every day.</p>
                <p>1. Collaboration: We encourage collaboration at all levels of the organization. We believe that when brilliant minds work together, amazing results can be achieved. We value each employee's ideas and encourage open and constructive communication.</p>
                <p>2. Empowerment: We want our employees to feel empowered and responsible for their work. We promote autonomy and informed decision making. This not only increases job satisfaction but also drives creativity and innovation.</p>
                <p>3. Participation in Success: At Quorum, we go a step further to involve our employees in the success of the project. We offer our talented collaborators the opportunity to share a percentage of the project during their stay at Quorum. We believe that when you contribute to the company's success, you should also share in the benefits.</p>
                <StaffCard/>
            </div>
            
            <FooterApp/>
        </>
    )
}
export default Staff;