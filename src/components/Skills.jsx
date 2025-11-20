import '../styles/skills.css';

const dataSkills = [
    {
        id: 1, 
        name: 'HTML5',
        img: "/html.png",
        text: '90s websites vibe'
    },
    {
        id: 2, 
        name: 'CSS3',
        img: "/css.png",
        text: 'Designer\'s dream'
    },
    {
        id: 3, 
        name: 'JavaScript',
        img: "/js.png",
        text: 'Makes you think... a lot'
    },
    {
        id: 4, 
        name: 'React',
        img: "/react.png",
        text: 'Not as scary as I thought'
    },
    {
        id: 5, 
        name: 'Go',
        img: "/go.png",
        text: 'Thanks, Yandex!'
    },
    {
        id: 6,
        name: 'Vercel',
        img: "/vercel.jpg",
        text: 'Deployment made easy'
    },
    {
        id: 7,
        name: 'GitHub',
        img: "/github.png",
        text: 'Code platform site'
    },
    {
        id: 8,
        name: 'TypeScript',
        img: "/typescript.png",
        text: 'JS with superpowers'
    },
    {
        id: 9,
        name: 'Zustand',
        img: "/zustand.svg",
        text: 'Just API for React'
    },
    {
        id: 10,
        name: 'Vite',
        img: "/vite.png",
        text: 'Cool and fast build tool'
    },
    {
        id: 11,
        name: 'React Query',
        img: "/react-query.svg",
        text: 'Server state management'
    },
    {
        id: 12,
        name: 'React Router',
        img: "/react-router.svg",
        text: 'Navigation for React apps'
    },
    {
        id: 13,
        name: 'Npm',
        img: "/npm.png",
        text: 'Package manager'
    },
    {
        id: 14,
        name: 'Git',
        img: "/git.png",
        text: 'Version control system'
    }
]

const duplicate = [...dataSkills, ...dataSkills]

export default function Skills() {
    return (
        <section id="skills">
        <div className='skills'>
            <h1 className='title'>Skills</h1>
            <Slider />
        </div>
        </section>
    )
}

function Slider() {
    return (
        <>
        <div className="slider-container">
            <div className="slider-track">
                {duplicate.map(skill => {
                    return <Card
                    key={skill.id}
                    name={skill.name}
                    img={skill.img}
                    text={skill.text}
                    />
                })}
            </div> 
        </div>
        </>
    )
}

function Card({ name, img, text }) {
    return (
        <>
            <div className='card'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p>{text}</p>
            </div>
        </>
    )
}