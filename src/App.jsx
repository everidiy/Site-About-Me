import LangProvider from "./contexts/LangContext.jsx";

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Info from './components/Info.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Connection from './components/Connection.jsx'
import Footer from './components/Footer.jsx'
import './styles/app.css';

export default function App() {
  return (
    <LangProvider>
      <Header />
      <Hero />
      <Info />
      <Skills />
      <Projects />
      <Connection />
      <Footer />
    </LangProvider>
  )
}