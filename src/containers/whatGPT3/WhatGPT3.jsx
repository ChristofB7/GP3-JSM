import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
    return (
        <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
            <div className='gpt3__whatgpt3-feature'>
                <Feature title='What is GPT3' text="We are excited to introduce ChatGPT to get users’ feedback and learn about its strengths and weaknesses. During the research preview, usage of GPT-3 is free." />
            </div>

            <div className='gpt3__whatgpt3-heading'>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Explore the libraray</p>
            </div>

            <div className='gpt3__whatgpt3-container'>
                <Feature title='Chatbots' text="GPT-3 can carry out humanlike conversations and write natural, fluid prose on an endless variety of topics. They can also perform complex tasks, from writing code to planning a kid’s birthday party." />
                <Feature title='Knowledgebase' text="We preview GPT-3’s performance by evaluating it on a narrow suite of standard academic vision benchmarks. However, these numbers do not fully represent the extent of its capabilities as we are constantly discovering new and exciting tasks that the model is able to tackle." />
                <Feature title='Education' text='We trained this model using Reinforcement Learning from Human Feedback (RLHF), using the same methods as InstructGPT, but with slight differences in the data collection setup. ' />
            </div>
        </div>
    )
}

export default WhatGPT3