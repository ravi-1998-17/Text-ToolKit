import React from 'react'

const About = () => {
    return (
        <div className='container mt-20 text-center mx-auto text-slate-800 dark:text-slate-100 absolute left-2/4 -translate-x-2/4'>
            <h1 className='text-5xl mb-20'>What is a word counter?</h1>
            <div className='grid grid-cols-2 gap-8 text-2xl text-balance text-left justify-items-center items-center h-max'>
                <p>When you add your text to Text TooKit, our powerful platform instantly performs the mundane task of counting for you, so you can see right where your word limit is sitting for your project.</p>

                <p>So, if you don't know whether compound words count as one or two words, save yourself the searching and let Text TooKitbe the words calculator.</p>

                <p>Trust WCT's expertise to know that hyphenated words only count as one, that accented letters don't count as two words, and that, usually, spaces do count as a word.</p>

                <p>There's no need to go cross-eyed counting words manually just to make sure you're hitting your writing benchmarks. Your time is worth more than that—and so is your eyesight.</p>
            </div>
        </div>
    )
}

export default About