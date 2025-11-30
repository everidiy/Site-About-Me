import '../styles/footer.css';
import { useLang } from '../contexts/LangContext';

export default function Footer() {
    const { t } = useLang()
    return (
        <div className="footer">
            <div className="nodes">
                <h2>{t('footer.text')}</h2>
                <div className="node logo-footer" onClick={() => window.open('https://github.com/everidiy', '_blank')}>
                    <img src="/logo.jpg" alt="logo" />
                </div>
            </div>
        </div>
    )
}