import { useState } from 'react';
import '../styles/projects.css';
import { useLang } from '../contexts/LangContext';

export default function Projects() {
    const { t } = useLang()
    return (
        <section id="projects">
        <div className='projects'>
            <div className="projects-background"></div>
            <h1 className='title-project'>{t('projects.title')}</h1>
            <Container />
        </div>
        </section>
    )
}

function Container() {
    const { t } = useLang()
    const [hide, setHide] = useState(false)

    const dataProjects = [
    {
        id: 1, 
        name: t('projects.items.biosite.name'),
        img: "/site.png",
        demo: 'https://everidiy.vercel.app/',
        code: 'https://github.com/everidiy/Site-About-Me',
        techologies: 'React, JavaScript, CSS, React Router, JSON, API'
    },
    {
        id: 2, 
        name: t('projects.items.zinland.name'),
        img: "/wiki.png",
        demo: 'https://zinland-wiki-site.vercel.app/',
        code: 'https://github.com/everidiy/Zinland-Wiki-Site',
        techologies: 'React, JavaScript, CSS, React Router, JSON'
    },
    {
        id: 3, 
        name: t('projects.items.library.name'),
        img: "/library.png",
        demo: '$',
        code: 'https://github.com/wtdear/PersonalLibrary_BooksGamesFilms',
        techologies: 'React, JavaScript, CSS, Python'
    },
    {
        id: 4, 
        name: t('projects.items.consolegame.name'),
        img: "/console.png",
        demo: 'https://disk.yandex.ru/d/WsK8v-vyfZsD0w',
        code: 'https://github.com/everidiy/Zinland-Island-Guess-A-Word',
        techologies: 'C#'
    },
    {
        id: 5, 
        name: t('projects.items.cardgame.name'),
        img: "/cards.png",
        demo: '%',
        code: 'https://github.com/everidiy/MemoryCardGame-App',
        techologies: 'HTML, CSS, JavaScript'
    },
    {
        id: 6, 
        name: t('projects.items.weather.name'),
        img: "/weather.png",
        demo: 'https://weather-app-on-react-lovat.vercel.app/',
        code: 'https://github.com/everidiy/Weather-App-On-React',
        techologies: 'React, Typescript, CSS, API'
    },
    {
        id: 7, 
        name: t('projects.items.todo.name'),
        img: "/todo.png",
        demo: 'https://your-daily-tasks.vercel.app/',
        code: 'https://github.com/everidiy/Daily-Tasks-App',
        techologies: 'React, JavaScript, CSS,'
    },
    ]

    const visibleProjects = hide ? dataProjects : dataProjects.slice(0, 6);

    return (
        <>
            <div className="container-projects">
                {visibleProjects.map(project => (
                    <Card
                        key={project.id}
                        name={project.name}
                        img={project.img}
                        demo={project.demo}
                        code={project.code}
                        techologies={project.techologies}
                    />
                ))}
            </div>

            {dataProjects.length > 6 && (
                <div className="projects-toggle">
                    <button onClick={() => setHide(prev => !prev)}>
                        {hide ? t('projects.hide') : t('projects.showmore')}
                    </button>
                </div>
            )}
        </>
    )
}

function Card({ name, img, demo, code, techologies}) {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLang()

    return (
        <>
            <div className='card-project'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <div className="project-links">
                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer">
                        {t('projects.items.demo')}</a>}
                    {code && <a href={code} target="_blank" rel="noopener noreferrer">
                        {t('projects.items.code')}</a>}
                </div>
                <div className='technologies'>
                    <div className="custom-details" onClick={() => setIsOpen(!isOpen)}>
                        <summary>{t('projects.items.stack')}</summary>
                        <i><p className={isOpen ? 'open' : ''}>{techologies}</p></i>
                    </div>
                </div>
            </div>
        </>
    )
}