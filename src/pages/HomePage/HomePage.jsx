import Hero from "../../components/HomePage/Hero"
import Word from "../../components/HomePage/Word"
import Education from "../../components/HomePage/Education"
import OverTheYears from "../../components/HomePage/OverTheYears"
import Skills from "../../components/HomePage/Skills"
import Background from "../../components/HomePage/Background"
import MyProjects from "../../components/HomePage/MyProjects"
import './HomePage.css'


const HomePage = () => {

    return (

        <>

            <div className="home-page">
                <Hero />
                <Word />
                <OverTheYears />
                <Education />
                <Skills />
                <Background />
                <MyProjects />
            </div>

        </>
    )
}

export default HomePage