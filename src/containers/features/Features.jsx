import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
    {
        title: 'Write Code',
        text: 'GPT-3 has the ability to write code in almost any language you request. It can build code from scratch or edit inserted code.'
    },
    {
        title: 'Create Marketing Content',
        text: 'GPT-3 will generate conent for your next eBook, or even with your next blog post. Having GPT in your pocket will elevate your content to the next level.'
    },
    {
        title: 'General Research',
        text: "Whether it's for school, business, or just growing your knowledge GPT-3 can help you learn. GPT-3 is an awesome tool for doing research or summarizing web content."
    },
    {
        title: 'Create Fictional Stories',
        text: 'Even with a vague prompt GPT-3 can come up with a full story with loveable characters and intruiging plot. We look forward to seeing your next netflix original.'
    },

]

const Features = () => {
    return (
        <div className='gpt3__features section__padding' id='features'>
            <div className='gpt3__features-heading'>
                <h1 className='gradient__text'>
                    The Future is Now and You Just Need To Realize It. Step into Future Today and Make it Happen.
                </h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='gpt3__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index} />
                ))}
            </div>
        </div>
    )
}

export default Features