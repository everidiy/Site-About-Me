import { useEffect, useRef, useState } from 'react';
import { useLang } from '../contexts/LangContext';
import '../styles/skills.css';

export default function Skills() {
    const { t } = useLang()

    const dataSkills = [
    {
        id: 1, 
        name: t('skills.items.html5.name'),
        img: "/html.png",
        text: t('skills.items.html5.quote'),
        stage: t('skills.levels.middle')
    },
    {
        id: 2, 
        name: t('skills.items.css3.name'),
        img: "/css.png",
        text: t('skills.items.css3.quote'),
        stage: t('skills.levels.middle')
    },
    {
        id: 3, 
        name: t('skills.items.javascript.name'),
        img: "/js.png",
        text: t('skills.items.javascript.quote'),
        stage: t('skills.levels.middle')
    },
    {
        id: 4, 
        name: t('skills.items.react.name'),
        img: "/react.png",
        text: t('skills.items.react.quote'),
        stage: t('skills.levels.middle')
    },
    {
        id: 5, 
        name: t('skills.items.api.name'),
        img: "/api.png",
        text: t('skills.items.api.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 6, 
        name: t('skills.items.go.name'),
        img: "/go.png",
        text: t('skills.items.go.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 7,
        name: t('skills.items.vercel.name'),
        img: "/vercel.jpg",
        text: t('skills.items.vercel.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 8,
        name: t('skills.items.github.name'),
        img: "/github.png",
        text: t('skills.items.github.quote'),
        stage: t('skills.levels.middle')
    },
    {
        id: 9,
        name: t('skills.items.typescript.name'),
        img: "/typescript.png",
        text: t('skills.items.typescript.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 10,
        name: t('skills.items.cs.name'),
        img: "/cs.webp",
        text: t('skills.items.cs.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 11,
        name: t('skills.items.vite.name'),
        img: "/vite.png",
        text: t('skills.items.vite.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 12,
        name: t('skills.items.sql.name'),
        img: "/sql.png",
        text: t('skills.items.sql.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 13,
        name: t('skills.items.react_router.name'),
        img: "/react-router.webp",
        text: t('skills.items.react_router.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 14,
        name: t('skills.items.npm.name'),
        img: "/npm.png",
        text: t('skills.items.npm.quote'),
        stage: t('skills.levels.basic')
    },
    {
        id: 15,
        name: t('skills.items.git.name'),
        img: "/git.png",
        text: t('skills.items.git.quote'),
        stage: t('skills.levels.basic')
    }, 
    {
        id: 16,
        name: t('skills.items.json.name'),
        img: "/json.png",
        text: t('skills.items.json.quote'),
        stage: t('skills.levels.basic')
    }, 
    ]

    const duplicate = [...dataSkills]

    const [isMobile, setIsMobile] = useState(false)
    const [selectedStage, setSelectedStage] = useState('All');

    const handleSelectedChange = (e) => {
        setSelectedStage(e.target.value)
    }

    const filteredSkills = selectedStage === 'All' ? 
    duplicate : duplicate.filter(skill => {
        if (selectedStage === 'Basic') return skill.stage === t('skills.levels.basic');
        if (selectedStage === 'Middle') return skill.stage === t('skills.levels.middle');
        if (selectedStage === 'Pro') return skill.stage === t('skills.levels.pro');
        if (selectedStage === 'Untouched') return skill.stage === t('skills.levels.untouched');
        return true;
    });

    return (
        <section id="skills">
        <section id='learn'>
        <div className='skills'>
            <h1 className='title'>{t('skills.title')}</h1>
            <select
            className='findStage'
            name="findStage"
            id="findStage"
            value={selectedStage}
            onChange={handleSelectedChange}
            >
                <option value="All">{t("skills.levels.all")}</option>
                <option value="Basic">{t("skills.levels.basic")}</option>
                <option value="Middle">{t("skills.levels.middle")}</option>
                <option value="Pro">{t("skills.levels.pro")}</option>
            </select>
            <Slider filteredSkills={filteredSkills} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <div style={{ 
                textAlign: 'center', 
                marginTop: '10px', 
                fontSize: '20px', 
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
            }}>
                {isMobile ? (t('skills.clue')) : ('')}
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
    const { t } = useLang()
    const dataStage = {
        styleStageBasic: 'linear-gradient(135deg, #43A047, #66BB6A)',
        styleStageMiddle: 'linear-gradient(135deg, #FFB300, #FFCA28)',
        styleStagePro: 'linear-gradient(135deg, #E53935, #EF5350)',
    };

    const renderStage = () => {
        switch(stage) {
            case 'Basic':
            case t('skills.levels.basic'):
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
            case t('skills.levels.middle'):
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
            case t('skills.levels.pro'):
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