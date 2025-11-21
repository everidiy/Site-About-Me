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

//russian

// Меня зовут Богдан, мне 17 лет, и то, что начиналось как детская мечта, теперь превратилось в
// ясную, осознанную цель: стать фронтенд-разработчиком, способным постоянно учиться и бесконечно расти!
// Мой путь начался в 2022 году, когда я нашел бесплатный курс по веб-разработке от Госуслуг.
// Пройдя его, я сразу понял — это мое призвание, то, чем я могу страстно заниматься всю жизнь. 
// Этот момент положил начало моему фронтенд-приключению. На пути было множество взлетов и падений, 
// бесчисленные проекты — от неуклюжих до потрясающих. Я познакомился со многими технологиями, и с 
// каждой новой сначала задавался вопросом: "Как я вообще это изучу?!" Но, как говорится,
// у страха глаза велики. Несмотря на сомнения, я продолжаю двигаться к своей цели — иногда медленно
// иногда быстро, но всегда вперед!

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