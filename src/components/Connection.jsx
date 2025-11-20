import '../styles/connection.css';
import { useState } from 'react';

const dataContacts = [
    {
        id: 1,
        name: 'Telegram',
        img: "/telegram.png",
        text: 'Write a message',
        link: 'https://t.me/everidiy',
        color: '#4dbcd8ff'
    },
    {
        id: 2,
        name: 'GitHub',
        img: "/githubsecond.png",
        text: 'View my projects',
        link: 'https://github.com/everidiy',
        color: '#141414ff'
    },
    {
        id: 3,
        name: 'VK',
        img: "/vk.png",
        text: 'Write a message',
        link: 'https://vk.com/bogeeffff',
        color: '#01679eff'
    }
];

export default function Connection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextContact = () => {
        setCurrentIndex((prev) => (prev + 1) % dataContacts.length);
    };

    const prevContact = () => {
        setCurrentIndex((prev) => (prev - 1 + dataContacts.length) % dataContacts.length);
    };

    const currentContact = dataContacts[currentIndex];

    return (
        <section id='contact'>
            <div className="connection">
                <h3 className="title-contact">I'm always available for communication!</h3>
                <div className="container-contacts">
                    <button className="contact-arrow left-arrow" onClick={prevContact}>
                        <p>‹</p>
                    </button>
                    
                    <div 
                        className="contact-card" 
                        onClick={() => window.open(currentContact.link, '_blank')}
                    >
                        <div className="contact-card-header" style={{ backgroundColor: currentContact.color }}>
                            <h4>{currentContact.name}</h4>
                        </div>
                        <div className="contact-card-body">
                            <img src={currentContact.img} alt={currentContact.name} />
                            <p>{currentContact.text}</p>
                            <button 
                                className="contact-link-btn" 
                                style={{ backgroundColor: currentContact.color }}
                            >
                                Go to →
                            </button>
                        </div>
                    </div>
                    
                    <button className="contact-arrow right-arrow" onClick={nextContact}>
                        <p>›</p>
                    </button>
                </div>

                <div className="contact-dots">
                    {dataContacts.map((_, index) => (
                        <span
                            key={index}
                            className={`contact-dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}