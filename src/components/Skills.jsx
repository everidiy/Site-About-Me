import { useEffect, useRef, useState } from 'react';
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
        <section id='learn'>
        <div className='skills'>
            <h1 className='title'>Skills</h1>
            <Slider />
        </div>
        </section>
        </section>
    )
}

function Slider() {
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoScroll, setAutoScroll] = useState(true);

    useEffect(() => {
        if (!autoScroll || !sliderRef.current) return;

        const slider = sliderRef.current;
        let animationId;

        const animate = () => {
            if (slider && autoScroll) {
                slider.scrollLeft += 5.5;

                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                }

                animationId = requestAnimationFrame(animate);
            }
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [autoScroll]);

    //Desktop
    const handleMouseDown = (e) => {
        setIsDragging(true)
        setStartX(e.pageX - sliderRef.current.offsetLeft)
        setScrollLeft(sliderRef.current.scrollLeft)
        setAutoScroll(false)
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        
        const x = e.pageX;
        const walk = (x - startX) * 2;
        
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = (e) => {
        setIsDragging(false)
        setTimeout(() => setAutoScroll(true), 2000)
    }

    const handleMouseUp = (e) => {
        setIsDragging(false)
        setTimeout(() => setAutoScroll(true), 2000)
    }

    //Mobile
    const handleTouchStart = (e) => {
        setIsDragging(true)
        setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft)
        setScrollLeft(sliderRef.current.scrollLeft)
        setAutoScroll(false)
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - sliderRef.current.offsetLeft
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    }

    const handleTouchEnd = () => {
        setIsDragging(false);
        setTimeout(() => setAutoScroll(true), 2000);
    };

    return (
        <>
        <div
        className="slider-container"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            <div className="slider-track">
                {duplicate.map((skill, index) => {
                    return <Card
                    key={`${skill.id}-${index}`}
                    name={skill.name}
                    img={skill.img}
                    text={skill.text}
                    />
                })}
            </div> 
        </div>
        <div style={{ 
                textAlign: 'center', 
                marginTop: '10px', 
                fontSize: '16px', 
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
                marginTop: '20px'
            }}>
                You can grab this!
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