import { Route, Routes } from 'react-router-dom'
import HomePage from "../pages/HomePage/HomePage"
import MegafonoPage from "../pages/MegafonoPage/MegafonoPage"
import IgafPage from "../pages/IgafPage/IgafPage"
import OdysseyPage from "../pages/OdysseyPage/OdysseyPage"
import PorfolioPage from '../pages/PorfolioPage/PorfolioPage'
import DevOpsPage from '../pages/DevOpsPage/DevOpsPage'
import Mamachamapage from '../pages/MamachamaPage/Mamachamapage'


const AppRoutes = ({ data }) => {

    return (

        <Routes>

            <Route path='/' element={<HomePage data={data} />} />
            <Route path='/el-megafono' element={<MegafonoPage data={data.projects.elMegafono} />} />
            <Route path='/igaf' element={<IgafPage data={data.projects.igaf} />} />
            <Route path='/2023-a-flat-rent-odyssey' element={<OdysseyPage data={data.projects.flatRentOdyssey} />} />
            <Route path='/porfolio' element={<PorfolioPage data={data.projects.helenadev} />} />
            <Route path='/devops' element={<DevOpsPage data={data.projects.devopsBootcamp} />} />
            <Route path='/mamachama' element={<Mamachamapage data={data.projects.mamachama} />} />

        </Routes>
    )
}

export default AppRoutes