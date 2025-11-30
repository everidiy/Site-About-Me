import '../styles/info.css';
import { useLang } from '../contexts/LangContext';

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
    const { t } = useLang()
    return (
        <>
            <h1 className='title'>{t('about.title')}</h1>
        </>
    )
}

function About() {
    const { t } = useLang()

    const paragraphs = [
        'about.introduction',
        'about.journeyStart', 
        'about.challenges',
        'about.determination'
    ];

    return (
        <>
            <div className='prehistory'>
                {paragraphs.map((key, index) => (
                    <p 
                        key={key}
                        dangerouslySetInnerHTML={{ __html: t(key) }}
                    />
                ))}
            </div>
        </>
    )
}