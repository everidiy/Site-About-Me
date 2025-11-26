import { useState } from 'react';
import '../styles/projects.css';

const dataProjects = [
    {
        id: 1, 
        name: 'To-Do App',
        img: "/todo.png",
        demo: '*',
        code: 'https://github.com/everidiy/To-Do-List-App-Only-React-TypeScript-',
        techologies: 'HTML, CSS, JavaScript, React, Typescript'
    },
    {
        id: 2, 
        name: 'Weather App',
        img: "/weather.png",
        demo: 'https://weather-app-on-react-lovat.vercel.app/',
        code: 'https://github.com/everidiy/Weather-App-On-React',
        techologies: 'HTML, CSS, JavaScript, React, Typescript, API'
    },
    {
        id: 3, 
        name: 'Tic-Tac-Toe',
        img: "/titac.png",
        demo: '$',
        code: 'https://github.com/everidiy/Tic-Tac-Toe-React-App',
        techologies: 'HTML, CSS, JavaScript, React'
    },
    {
        id: 4, 
        name: 'Card Game',
        img: "/cards.png",
        demo: '%',
        code: 'https://github.com/everidiy/MemoryCardGame-App',
        techologies: 'HTML, CSS, JavaScript'
    },
    {
        id: 5, 
        name: 'Shop List',
        img: "/list.png",
        demo: '%',
        code: 'https://github.com/everidiy/ShoppingList-App',
        techologies: 'HTML, CSS, JavaScript'
    },
    {
        id: 6, 
        name: 'Bio-Site',
        img: "/site.png",
        demo: '%',
        code: 'https://github.com/everidiy/repeating-Bio-Site-Zendaya',
        techologies: 'HTML, CSS'
    },
]

export default function Projects() {
    return (
        <section id="projects">
        <div className='projects'>
            <div className="projects-background"></div>
            <h1 className='title-project'>Projects</h1>
            <Container />
        </div>
        </section>
    )
}

function Container() {
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
    return (
        <>
            <div className='card-project'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <div className="project-links">
                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                    {code && <a href={code} target="_blank" rel="noopener noreferrer">Code</a>}
                </div>
                <div className='technologies'>
                    <div className="custom-details" onClick={() => setIsOpen(!isOpen)}>
                        <summary>Stack</summary>
                        <i><p className={isOpen ? 'open' : ''}>{techologies}</p></i>
                    </div>
                </div>
            </div>
        </>
    )
}