import '../styles/info.css';

export default function Info() {
    return (
        <section id='about'>
        <div className='info'>
            <div className="text">
                <Title />
                <About />
            </div>
        </div>
        </section>
    )
}

function Title() {
    return (
        <>
            <h1 className='title'>A little about me</h1>
        </>
    )
}

function About() {
    return (
        <>
            <p className='prehistory'>
                My name is <strong style={{color: 'var(--accent-color)'}}>Bogdan</strong>, I'm <strong>17 years old</strong>, and what began as a childhood dream
                has now evolved into a <strong>clear, purposeful goal</strong>: to become a <strong style={{color: 'var(--accent-color)'}}>frontend developer </strong> 
                capable of <strong>continuous learning and endless growth</strong>! <br /><br />

                My journey started in <strong>2022</strong> when I discovered a free web development course from <strong>Gosuslugi</strong>.
                After completing it, I knew immediately - <strong>this was my calling</strong>, something I could passionately
                pursue forever. That moment marked the beginning of my <strong>frontend adventure</strong>. There have been
                numerous <strong>highs and lows</strong>, countless projects ranging from awkward to amazing. I've encountered
                many technologies, and with each new one, I initially wondered: "<strong style={{color: 'var(--accent-color)'}}>How will I ever
                learn this?!</strong>" But as they say, <u><em>fear has big eyes</em></u>. <br /><br />

                <strong>Despite doubts, I keep pushing
                forward toward my goal</strong> - sometimes slowly, sometimes quickly, but <strong>always moving ahead</strong>!
            </p>
        </>
    )
}