import React from 'react';
import * as Icon from 'react-feather';
import './sections.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

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
                <p>Try one of our products and we'll make sure you have a good time, then. How do I do it?</p>
                <button>Fun with me!</button>
            </div>
        </div>
    )
    
}

const SectionThree = () => {

    return (
        <div className='section-three'>
            <h1>Am I going fun with?</h1>
            <div>
                
                <AwesomeSlider>
                    <div data-src="https://media.discordapp.net/attachments/1041281604338851915/1044499309892210758/sa-mp-001.png" />
                    <div data-src="https://media.discordapp.net/attachments/1041281604338851915/1044499310240342036/sa-mp-002.png" />
                    <div data-src="https://media.discordapp.net/attachments/1041281604338851915/1044499310538141777/sa-mp-003.png" />
                </AwesomeSlider>
            </div>
        </div>
    )
    
}
export {SectionOne, SectionTwoo, SectionThree};