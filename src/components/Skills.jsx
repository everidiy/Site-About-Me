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
        stage: 'Untouched '
    },
    {
        id: 11,
        name: 'Vite',
        img: "/vite.png",
        text: 'Cool and fast build tool',
        stage: 'Basic'
    },
    {
        id: 12,
        name: 'React Query',
        img: "/react-query.svg",
        text: 'Server state management',
        stage: 'Untouched '
    },
    {
        id: 13,
        name: 'React Router',
        img: "/react-router.svg",
        text: 'Navigation for React apps',
        stage: 'Untouched '
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
        text: 'Version control system',
        stage: 'Basic'
    }
]

const duplicate = [...dataSkills]

export default function Skills() {
    return (
        <section id="skills">
        <section id='learn'>
        <div className='skills'>
            <h1 className='title'>Skills</h1>
            <Slider />
            <div style={{ 
                textAlign: 'center', 
                marginTop: '10px', 
                fontSize: '20px', 
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
                marginTop: '20px'
            }}>
               You can scroll this! 
        </div>
        </div>
        </section>
        </section>
    )
}

function Slider() {
    const sliderRef = useRef(null);

    //Desktop
    const handleWheel = (e) => {
        if (!sliderRef.current) return;
        e.stopPropagation();
        sliderRef.current.scrollLeft += e.deltaY;
    }

    return (
        <>
        <div
            className="slider-container"
            ref={sliderRef}
            onWheel={handleWheel}
            style={{ cursor: 'grab' }}
        >
            <div className="slider-track">
                {duplicate.map((skill, index) => {
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
        </>
    )
}

function Card({ name, img, text, stage }) {
    const dataStage = {
        styleStageBasic: '#4CAF50',
        styleStageMiddle: '#ffd000ff', 
        styleStagePro: '#F44336',

    };
    const renderStage = () => {
        if (stage == 'Basic') {
            return (
                <div className="stage">
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStageBasic}` }}
                    ></div>
                    <div
                    className='stageBlock'
                    ></div>
                    <div
                    className='stageBlock'
                    ></div>
                </div>
            );
        } else if (stage == 'Middle') {
            return (
                <div className="stage">
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStageMiddle}` }}
                    ></div>
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStageMiddle}` }}
                    ></div>
                    <div
                    className='stageBlock'
                    ></div>
                </div>
            );
        } else if (stage == 'Pro') {
            return (
                <div className="stage">
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStagePro}` }}
                    ></div>
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStagePro}` }}
                    ></div>
                    <div
                    className='stageBlock'
                    style={{ backgroundColor: `${dataStage.styleStagePro}` }}
                    ></div>
                </div>
            );
        } else {
            return (
                <div className="stage">
                    <div
                    className='stageBlock'
                    ></div>
                    <div
                    className='stageBlock'
                    ></div>
                    <div
                    className='stageBlock'
                    ></div>
                </div>
            );
        }
}
    return (
        <>
            <div className='card'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p>{text}</p>
                <div className='stageOfSkill'>
                    <p>{stage}</p>
                    {renderStage()}
                </div>
            </div>
        </>
    )
}