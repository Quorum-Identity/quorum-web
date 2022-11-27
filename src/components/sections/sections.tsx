import React from 'react';
import * as Icon from 'react-feather';
import './sections.css';
import ManhattanBanner from '../../assets/mbanner.png';
import { useNavigate } from 'react-router-dom'

const SectionOne = () => {
    return (
        <div>
            <div className='section-one'>
                <h1 className='first-title'> MANHATTAN</h1>
                <span>TRY NOW</span>
            </div><div className='arrow-back'>
                <h1>DOWN</h1>
                <Icon.ArrowDown color='#212035'/>
            </div>
        </div>
    )
    
}
const SectionTwoo = () => {
    return (
        <div className='box'>
            <div className='section-twoo'>
                <h1> What you want a good time?</h1>
                <p>So how do I have a good time with you? It's just a friend. Keep going down and you will find everything you need. Playing our games is super easy!</p>
                <button>Fun with me!</button>
            </div>
        </div>
    )
    
}

const SectionThree = () => {
    const navigate = useNavigate();
    return (
        <div className='section-three'>
            <h1>Yes, good times!</h1>
            <p>We love developing videogames, we have different projects that we work very hard on and we look forward to having you try them.</p>
            <p>Our most recent release will be in January, a multiplayer mode where you choose the fate of your character. You can have fun with friends or create your path in this Roleplay mode. from working in a company or different jobs to managing your business or faction for the power struggle.</p>
            <div className="presentation-cards">
                <div className="presentation-exact-card" onClick={() => navigate('/store/manhattan')}>
                    <div className="presentation-brand-card">
                        <img src={ManhattanBanner}/>
                    </div>
                    <h1>Manhattan</h1>
                    <p>You start your character in a world set in 2000s New York, Manhattan. You choose which path to take</p>
                    <div className="presentation-brand-footer">
                        <p>FREE</p>
                        <div>
                        <span className="presentation-brand-footer-tags">MULTIPLAYER</span>
                        </div>
                    </div>
                </div>
                <div className="presentation-exact-card">
                    <div className="presentation-brand-card">
                        <img src={ManhattanBanner}/>
                    </div>
                    <h1>Crafters</h1>
                    <p>You start your character in a world set in 2000s New York, Manhattan. You choose which path to take</p>
                    <div className="presentation-brand-footer">
                        <p>FREE</p>
                        <span className="presentation-brand-footer-tags">COMING SOON</span>
                    </div>
                </div>
                <div className="presentation-exact-card">
                    <div className="presentation-brand-card">
                        <img src={ManhattanBanner}/>
                    </div>
                    <h1>Crafters</h1>
                    <p>You start your character in a world set in 2000s New York, Manhattan. You choose which path to take</p>
                    <div className="presentation-brand-footer">
                        <p>FREE</p>
                        <span className="presentation-brand-footer-tags">COMING SOON</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
    
}
export {SectionOne, SectionTwoo, SectionThree};