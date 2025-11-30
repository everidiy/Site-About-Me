import { createContext, useContext, useState } from "react";
import enTranslations from './jsons/en.json'
import ruTranslations from './jsons/ru.json';

const LangContext = createContext()

export default function LangProvider({ children }) {
    const [lang, setLang] = useState('en')

    const toggleLang = () =>{
        setLang(prevLang => prevLang === 'ru' ? 'en' : 'ru')
    }

    const translations = lang === 'ru' ? ruTranslations : enTranslations;

    const value = {
        lang,
        toggleLang,
        isEng: lang === 'en',
        t: (key) => {
            return key.split('.').reduce((obj, k) => obj?.[k], translations) || key;
        }
    }

    return (
        <LangContext.Provider value={value}>
            {children}
        </LangContext.Provider>
    )
}

export function useLang() {
    const lang = useContext(LangContext)
    if (lang === undefined) {
        throw new Error('useLang must be used within a LangProvider');
    }
    return lang
}