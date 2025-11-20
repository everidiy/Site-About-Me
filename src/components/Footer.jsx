import '../styles/footer.css';

export default function Footer() {
    const handleEmailClick = () => {
        window.location.href = 'mailto:davydovbogdan599@gmail.com?subject=Предложение о сотрудничестве';
    };

    const handlePhoneClick = () => {
        window.open('tel:+79530732968');
    };

    return (
        <div className="footer">
            <div className="nodes">
                <div className="node logo-footer" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                    <img src="/logo.jpg" alt="Богдан Давыдов" />
                </div>
                <div className="node number" onClick={handlePhoneClick}>
                    <h2>+7 953 073 29 68</h2>
                </div>
                <div className="node email" onClick={handleEmailClick}>
                    <h2>davydovbogdan599@gmail.com</h2>
                </div>
            </div>
        </div>
    )
}