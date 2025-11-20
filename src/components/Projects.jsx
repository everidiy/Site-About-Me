import '../styles/projects.css';

const dataProjects = [
    {
        id: 1, 
        name: 'To-Do App',
        img: "/todo.png",
        demo: '*',
        code: 'https://github.com/everidiy/To-Do-List-App-Only-React-TypeScript-'
    },
    {
        id: 2, 
        name: 'Weather App',
        img: "/weather.png",
        demo: 'https://weather-app-on-react-lovat.vercel.app/',
        code: 'https://github.com/everidiy/Weather-App-On-React'
    },
    {
        id: 3, 
        name: 'Tic-Tac-Toe',
        img: "/titac.png",
        demo: '$',
        code: 'https://github.com/everidiy/Tic-Tac-Toe-React-App'
    },
    {
        id: 4, 
        name: 'Card Game',
        img: "/cards.png",
        demo: '%',
        code: 'https://github.com/everidiy/MemoryCardGame-App'
    },
    {
        id: 5, 
        name: 'Shop List',
        img: "/list.png",
        demo: '%',
        code: 'https://github.com/everidiy/ShoppingList-App'
    },
    {
        id: 6, 
        name: 'Bio-Site',
        img: "/site.png",
        demo: '%',
        code: 'https://github.com/everidiy/repeating-Bio-Site-Zendaya'
    },
]

export default function Projects() {
    return (
        <section id="projects">
        <div className='projects'>
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
                code={project.code}
                demo={project.demo}
                />
            })}
        </div>
        </>
    )
}

function Card({ name, img, demo, code}) {
    return (
        <>
            <div className='card-project'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <div className="project-links">
                    {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>}
                    {code && <a href={code} target="_blank" rel="noopener noreferrer">Code</a>}
                </div>
            </div>
        </>
    )
}