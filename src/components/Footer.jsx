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
                <h2>More information at</h2>
                <div className="node logo-footer" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                    <img src="/logo.jpg" alt="Богдан Давыдов" />
                </div>
            </div>
        </div>
    )
}