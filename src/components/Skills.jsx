import { useEffect, useRef, useState } from 'react';
import { useLang } from '../contexts/LangContext';
import '../styles/skills.css';

export default function Skills() {
    const { t } = useLang()
    const [showAll, setShowAll] = useState(false);

    const dataSkills = [
    {
        id: 1, 
        name: t('skills.items.html5.name'),
        img: "/html.png",
        text: t('skills.items.html5.quote'),
    },
    {
        id: 2, 
        name: t('skills.items.css3.name'),
        img: "/css.png",
        text: t('skills.items.css3.quote'),
    },
    {
        id: 3, 
        name: t('skills.items.javascript.name'),
        img: "/js.png",
        text: t('skills.items.javascript.quote'),
    },
    {
        id: 4, 
        name: t('skills.items.react.name'),
        img: "/react.png",
        text: t('skills.items.react.quote'),
    },
    {
        id: 5, 
        name: t('skills.items.api.name'),
        img: "/api.png",
        text: t('skills.items.api.quote'),
    },
    {
        id: 6, 
        name: t('skills.items.go.name'),
        img: "/go.png",
        text: t('skills.items.go.quote'),
    },
    {
        id: 7,
        name: t('skills.items.vercel.name'),
        img: "/vercel.jpg",
        text: t('skills.items.vercel.quote'),
    },
    {
        id: 8,
        name: t('skills.items.github.name'),
        img: "/github.png",
        text: t('skills.items.github.quote'),
    },
    {
        id: 9,
        name: t('skills.items.typescript.name'),
        img: "/typescript.png",
        text: t('skills.items.typescript.quote'),
    },
    {
        id: 10,
        name: t('skills.items.cs.name'),
        img: "/cs.webp",
        text: t('skills.items.cs.quote'),
    },
    {
        id: 11,
        name: t('skills.items.vite.name'),
        img: "/vite.png",
        text: t('skills.items.vite.quote'),
    },
    {
        id: 12,
        name: t('skills.items.sql.name'),
        img: "/sql.png",
        text: t('skills.items.sql.quote'),
    },
    {
        id: 13,
        name: t('skills.items.react_router.name'),
        img: "/react-router.webp",
        text: t('skills.items.react_router.quote'),
    },
    {
        id: 14,
        name: t('skills.items.npm.name'),
        img: "/npm.png",
        text: t('skills.items.npm.quote'),
    },
    {
        id: 15,
        name: t('skills.items.git.name'),
        img: "/git.png",
        text: t('skills.items.git.quote'),
    }, 
    {
        id: 16,
        name: t('skills.items.json.name'),
        img: "/json.png",
        text: t('skills.items.json.quote'),
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

    const visibleSkills = showAll ? filteredSkills : filteredSkills.slice(0, 8);

    return (
        <section id="skills">
        <section id='learn'>
        <div className='skills'>
            <h1 className='title'>{t('skills.title')}</h1>
            <Slider filteredSkills={visibleSkills} isMobile={isMobile} setIsMobile={setIsMobile}/>
            <div style={{ 
                textAlign: 'center', 
                marginTop: '10px', 
                fontSize: '20px', 
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
            }}>
                {isMobile ? (t('skills.clue')) : ('')}

                {filteredSkills.length > 8 && (
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <button className='skillsHideBtn'
                        onClick={() => setShowAll(prev => !prev)}
                        >
                        {showAll ? t('skills.hide') : t('skills.showmore')}
                        </button>
                    </div>
                )}
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

function Card({ name, img, text }) {
    const { t } = useLang()

    return (
        <>
            <div className='card'>
                <h3>{name}</h3>
                <img src={img} alt={name} />
                <p className='textBlock'>{text}</p>
                <div className='stageOfSkill'>
                </div>
            </div>
        </>
    )
}