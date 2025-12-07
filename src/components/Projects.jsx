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

    const dataProjects = [
    {
        id: 1, 
        name: t('projects.items.todo.name'),
        img: "/todo.png",
        demo: '*',
        code: 'https://github.com/everidiy/To-Do-List-App-Only-React-TypeScript-',
        techologies: 'HTML, CSS, JavaScript, React, Typescript'
    },
    {
        id: 2, 
        name: t('projects.items.weather.name'),
        img: "/weather.png",
        demo: 'https://weather-app-on-react-lovat.vercel.app/',
        code: 'https://github.com/everidiy/Weather-App-On-React',
        techologies: 'HTML, CSS, JavaScript, React, Typescript, API'
    },
    {
        id: 3, 
        name: t('projects.items.library.name'),
        img: "/library.png",
        demo: '$',
        code: 'https://github.com/wtdear/PersonalLibrary_BooksGamesFilms',
        techologies: 'HTML, CSS, JavaScript, React'
    },
    {
        id: 4, 
        name: t('projects.items.cardgame.name'),
        img: "/cards.png",
        demo: '%',
        code: 'https://github.com/everidiy/MemoryCardGame-App',
        techologies: 'HTML, CSS, JavaScript'
    },
    {
        id: 5, 
        name: t('projects.items.shoplist.name'),
        img: "/list.png",
        demo: '%',
        code: 'https://github.com/everidiy/ShoppingList-App',
        techologies: 'HTML, CSS, JavaScript'
    },
    {
        id: 6, 
        name: t('projects.items.biosite.name'),
        img: "/site.png",
        demo: '%',
        code: 'https://github.com/everidiy/repeating-Bio-Site-Zendaya',
        techologies: 'HTML, CSS'
    },
    ]

    return (
        <>
        <div className="container-projects">
            {dataProjects.map(project => {
                return <Card
                key={project.id}
                name={project.name}
                img={project.img}
                demo={project.demo}
                code={project.code}
                techologies={project.techologies}
                />
            })}
        </div>
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