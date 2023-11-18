import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppRoutes from "./routes/AppRoutes"
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'
import data from './../helena-porfolio.json'


function App() {

  return (

    <>

      <Navigation />
      <AppRoutes data={data} />
      <Footer />

    </>
  )
}

export default App
