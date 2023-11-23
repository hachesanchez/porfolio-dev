import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from "./routes/AppRoutes"
import Navigation from './components/Navigation/Navigation'
import FooterPage from './pages/FooterPage/FooterPage'
import data from './../helena-porfolio.json'
import ScrollToTop from './ScrollToTop'

function App() {

  return (


    <ScrollToTop>
      <Navigation />
      <AppRoutes data={data} />
      <FooterPage />
    </ScrollToTop>


  )
}

export default App
