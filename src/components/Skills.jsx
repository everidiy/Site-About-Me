import { useEffect, useRef, useState } from 'react';
import '../styles/skills.css';

const dataSkills = [
    {
        id: 1, 
        name: 'HTML5',
        img: "/html.png",
        text: '90s websites vibe',
        stage: 'Middle'
    },
    {
        id: 2, 
        name: 'CSS3',
        img: "/css.png",
        text: 'Designer\'s dream',
        stage: 'Middle'
    },
    {
        id: 3, 
        name: 'JavaScript',
        img: "/js.png",
        text: 'Makes you think... a lot',
        stage: 'Middle'
    },
    {
        id: 4, 
        name: 'React',
        img: "/react.png",
        text: 'Not as scary as I thought',
        stage: 'Basic'
    },
    {
        id: 5, 
        name: 'API',
        img: "/api.png",
        text: 'Extra brain wrinkles',
        stage: 'Basic'
    },
    {
        id: 6, 
        name: 'Go',
        img: "/go.png",
        text: 'Thanks, Yandex!',
        stage: 'Basic'
    },
    {
        id: 7,
        name: 'Vercel',
        img: "/vercel.jpg",
        text: 'Deployment made easy',
        stage: 'Basic'
    },
    {
        id: 8,
        name: 'GitHub',
        img: "/github.png",
        text: 'Code platform site',
        stage: 'Middle'
    },
    {
        id: 9,
        name: 'TypeScript',
        img: "/typescript.png",
        text: 'JS with superpowers',
        stage: 'Basic'
    },
    {
        id: 10,
        name: 'Zustand',
        img: "/zustand.svg",
        text: 'Just API for React',
        stage: 'Untouched'
    },
    {
        id: 11,
        name: 'Vite',
        img: "/vite.png",
        text: 'Cool & fast build tool',
        stage: 'Basic'
    },
    {
        id: 12,
        name: 'React Query',
        img: "/react-query.svg",
        text: 'Server manager',
        stage: 'Untouched'
    },
    {
        id: 13,
        name: 'React Router',
        img: "/react-router.webp",
        text: 'Super navigation',
        stage: 'Untouched'
    },
    {
        id: 14,
        name: 'Npm',
        img: "/npm.png",
        text: 'Package manager',
        stage: 'Basic'
    },
    {
        id: 15,
        name: 'Git',
        img: "/git.png",
        text: 'Version system',
        stage: 'Basic'
    }
]

const duplicate = [...dataSkills]

export default function Skills() {
    const [isMobile, setIsMobile] = useState(false)
    const [selectedStage, setSelectedStage] = useState('All');

    const handleSelectedChange = (e) => {
        setSelectedStage(e.target.value)
    }

    const filteredSkills = selectedStage === 'All' ? 
    duplicate : duplicate.filter(skill => skill.stage === selectedStage);

    return (
        <section id="skills">
        <section id='learn'>
        <div className='skills'>
            <h1 className='title'>Skills</h1>
            <select
            className='findStage'
            name="findStage"
            id="findStage"
            value={selectedStage}
            onChange={handleSelectedChange}
            >
                <option value="All">All</option>
                <option value="Basic">Basic</option>
                <option value="Middle">Middle</option>
                <option value="Pro">Pro</option>
                <option value="Untouched">Untouched</option>
            </select>
            <Slider filteredSkills={filteredSkills} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <div style={{ 
                textAlign: 'center', 
                marginTop: '10px', 
                fontSize: '20px', 
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
            }}>
                {isMobile ? ('You can scroll this!') : ('')}
        </div>
        </div>
        </section>
        </section>
    )
}

function Slider({ filteredSkills, isMobile, setIsMobile }) {
    const sliderRef = useRef(null);

     useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []); 

    //Desktop
    const handleWheel = (e) => {
        if (!sliderRef.current) return;
        e.preventDefault();
        sliderRef.current.scrollLeft += e.deltaY;
    }

    return (
        <>
        {isMobile ? (
             <div
                className="slider-container"
                ref={sliderRef}
                onWheel={handleWheel}
                style={{ 
                    cursor: 'grab',
                    overflowX: 'auto',
                }}
            >
                <div className="slider-track">
                    {filteredSkills.map((skill, index) => {
                        return <Card
                        key={`${skill.id}-${index}`}
                        name={skill.name}
                        img={skill.img}
                        text={skill.text}
                        stage={skill.stage}
                        />
                    })}
                </div> 
            </div>
        ) : (
            <div className="flex-container">
                <div className="flex-track">
                    {filteredSkills.map((skill) => {
                        return <Card
                        key={`${skill.id}`}
                        name={skill.name}
                        img={skill.img}
                        text={skill.text}
                        stage={skill.stage}
                        />
                    })}
                </div> 
            </div>
        )}
        </>
    )
}

function Card({ name, img, text, stage }) {
    const dataStage = {
        styleStageBasic: 'linear-gradient(135deg, #43A047, #66BB6A)',
        styleStageMiddle: 'linear-gradient(135deg, #FFB300, #FFCA28)',
        styleStagePro: 'linear-gradient(135deg, #E53935, #EF5350)',
    };

    const renderStage = () => {
        switch(stage) {
            case 'Basic':
                return (
                    <div className="stage">
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStageBasic }}
                        />
                        <div className='stageBlock'/>
                        <div className='stageBlock'/>
                    </div>
                );
            case 'Middle':
                return (
                    <div className="stage">
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStageMiddle }}
                        />
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStageMiddle }}
                        />
                        <div className='stageBlock'/>
                    </div>
                );
            case 'Pro':
                return (
                    <div className="stage">
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStagePro }}
                        />
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStagePro }}
                        />
                        <div
                            className='stageBlock'
                            style={{ background: dataStage.styleStagePro }}
                        />
                    </div>
                );
            default:
                return (
                    <div className="stage">
                        <div className='stageBlock'/>
                        <div className='stageBlock'/>
                        <div className='stageBlock'/>
                    </div>
                );
        }
}
    return (
        <>
            <div className='card'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p className='textBlock'>{text}</p>
                <div className='stageOfSkill'>
                    <p>{stage}</p>
                    {renderStage()}
                </div>
            </div>
        </>
    )
}